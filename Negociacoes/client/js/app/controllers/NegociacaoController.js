class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();
        
        //cria a negociacao
        let negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')),
                                        this._inputQuantidade.value,
                                        this._inputValor.value);

        //adicionar a negociacao na lista
    }
}