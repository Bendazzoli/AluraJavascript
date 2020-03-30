class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        let dateHelper = new DateHelper();
        
        //cria a negociacao
        let negociacao = new Negociacao(dateHelper.textoParaData(this._inputData.value),
                                        this._inputQuantidade.value,
                                        this._inputValor.value);

        console.log(negociacao);

        console.log(dateHelper.dataParaTexto(negociacao.data));

        //adicionar a negociacao na lista
    }
}