class View {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    template() {
        //Como não existe classe abstrata em Javascript, 
        // em caso de alguma outra classe extender da classe View e
        // não implementar o seu método template(), assumirá o template() da classe mãe
        // que irá subir um erro alertando que ele deverá ser implementado pela classe filha.
        throw new Error('O método template deve ser implementado');
    }
    
    //
    update(model) {
        //this._elemento é o elemento no qual ele está sendo referenciado no HTML
        // é o elemento do DOM
        // innerHTML é uma função do DOM para conseguir entender qual elemento está sendo
        //   renderizado e carregado na página HTML
        // this.template é o template HTML passado através do model no qual ele vai carregar.
        this._elemento.innerHTML = this.template(model);
    }
}