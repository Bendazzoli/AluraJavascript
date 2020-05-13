class ListaNegociacoes {

    constructor() {
        
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
        
        this._negociacoes = [];
    }
    
    get volumeTotal() {
        // ### REDUCE ###, processa o array o no final me dá um único resultado
        // no caso, irá percorrer todas as negociações, somando-as e reduzindo o array
        // até que no final ele me dá o resultado.
        // Ex: array [10,20,30]
        // inicia com 0.0 = 0.0 + 10; reduz 1 posição do meu array
        // resultado 10 + 20 = 30; reduz mais 1 posição do meu array
        // resultado 30 + 30 = 60; reduz mais 1 posição do meu array
        // acabou meu array, retorna meu valor somado do array, no exemplo que é 60
       return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }
}