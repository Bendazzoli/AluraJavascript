class Negociacao {
    
    constructor(data, quantidade, valor) {
        
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Congela o objeto para não ser alterado na mão
        //não deixa que os atributos não podem sofrer alteração
        //Garante como se fosse um "private"
        Object.freeze(this);
    }
    
    get volume() {
        
        return this._quantidade * this._valor;
    }
    
    get data() {
        
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        
        return this._quantidade;
    }
    
    get valor() {
        
        return this._valor;
    }
}