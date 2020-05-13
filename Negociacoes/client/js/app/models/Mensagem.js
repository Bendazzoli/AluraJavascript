class Mensagem {
    
    //No ES6 (2015) ele permite passar valor default para parâmetros
    // de construtores ou métodos, assim podendo:
    // let msg = new Mensagem(); -- o atributo texto assumirá o default
    // let msg = new Mensagem('Qualquer texto'); --  o atributo texto assumir valor passado
    constructor(texto='') {
        
        this._texto = texto;
    }
    
    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }
}