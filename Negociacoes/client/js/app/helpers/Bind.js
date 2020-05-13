/*
this._listaNegociacoes = new Bind(
            MODEL new ListaNegociacoes(), 
            VIEW new NegociacoesView($('#negociacoesView')), 
            REST OPERATORS 'adiciona', REST OPERATORS 'esvazia');
       
        this._mensagem = new Bind(
            MODEL new Mensagem(), VIEW new MensagemView($('#mensagemView')),
            REST OPERATORS 'texto');
*/
class Bind {
    
    //Me retorna o proxy já configurado de acordo com o modelo desejado
    //MODEL: minha classe modelo que eu estou trabalhando
    //VIEW: Minha classe view que eu estou trabalhando
    //... chamado de "Rest Operator", não tem limites para passagem de parametros por ser uma lista
    //PROPS: as propriedades na qual quero monitorar para sofrer alteração
    constructor(model, view, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));
            
        view.update(model);
        
        return proxy;
    }
}