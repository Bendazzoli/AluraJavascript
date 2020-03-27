class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        //Tratando data String para data Date
        var data = new Date(...
            this._inputData.value.split('-').map((item, indice) => item - indice % 2)
        );

        console.log(data);
        
        //cria a negociacao
        let negociacao = new Negociacao(new Date(data),
                                        this._inputQuantidade.value,
                                        this._inputValor.value);

        console.log(negociacao);

        //adicionar a negociacao na lista
    }
}