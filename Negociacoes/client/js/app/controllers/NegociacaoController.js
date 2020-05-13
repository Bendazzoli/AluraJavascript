class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');
    }
    
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
        this._limpaFormulario();   
    }
    
    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }

    importaNegociacoes(){
        let service = new NegociacaoService();

        Promise.all([service.obterNegociacaoDaSemana(), 
                     service.obterNegociacaoDaSemanaAnterior(),
                     service.obterNegociacaoDaSemanaRetrasada()])
        .then(negociacoes => {
            negociacoes
                 // reduce porque o promise da camada service me retorna um array
                 // de negociações e, o promise.all tbm me retorna um array.
                 // Nesse caso, ficando um array de arrays. 
                .reduce((newArray, arrayOfArrays) => newArray.concat(arrayOfArrays), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);
        
        /*=== Aqui acontecia o problema de ordem das datas, por exemplo, na hora de recarregar
              não colocava as ordens da semana, semana anterior e semana retrasada.
              Mesmo usando o promise, não respeitava a ordem que eu desejava.

        service.obterNegociacaoDaSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana obitda com sucesso.';
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacaoDaSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana passada obitda com sucesso.';
            })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacaoDaSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações da semana retrasada obitda com sucesso.';
            })
            .catch(erro => this._mensagem.texto = erro);*/
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}