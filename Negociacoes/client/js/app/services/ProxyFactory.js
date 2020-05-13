//É um padrão de projeto aonde eu tenho um cara "mentiroso", uso do Proxy
//
class ProxyFactory {
    
    //OBJETO: é quem eu quero cirar a proxy
    //PROPS: as propriedades que eu quero observar para serem disparadas pelo Proxy
    //ACAO: Ações que eu quero executar quando essas propriedades forem acessadas (métodos).
    static create(objeto, props, acao) {
     
        return new Proxy(objeto, {
                
                //GET: sempre vai ser disparada cada vez que for realizada a leitura de uma propriedade do meu objeto
                //TARGET: referencia do objeto original que está sendo encapsulado pelo proxy
                //PROP: a propriedade que está sendo acessada
                //RECEIVER: referência para o próprio proxy
                get(target, prop, receiver) {
                    
                    //Valido se o meu método está na lista em que eu quero interceptar
                    if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                        
                        //Retorno uma nova função substituindo a existente do objeto original
                        // para que seja executada uma nova função pelo meu proxy
                        // e não pelo meu objeto original.
                        //OBS: os returns de proxy SEMPRE SÃO em RECEIVER!!!
                        return function() {
                            
                            console.log(`interceptando ${prop}`);
                            
                            //target[prop] é a forma de acessar o propriedade passada em prop. 
                            //target.prop NÃO EXISTE!!!!
                            //arguments me dá acesso à todos os parâmetros passados para a função.
                            //Reflect.apply:
                            //- target[prop]: a função/metodo do meu objeto original, que é meu target
                            //- target: contexto do meu objeto original, no caso target é um this
                            //- arguments: os valores/parâmetros que eu estou passando para a função/método
                            let retorno = Reflect.apply(target[prop], target, arguments);
                            acao(target);
                            return retorno;
                        }
                    }
                    
                    return Reflect.get(target, prop, receiver);
                },
                
                //SET: sempre vai ser disparada cada vez que for realizada uma escrita de uma propriedade do meu objeto
                //TARGET, PROP e RECEIVER são os mesmos comentados acima na GET
                //VALUE: o novo valor no qual está sendo submetido à propriedade
                set(target, prop, value, receiver) {
                    
                    let retorno = Reflect.set(target, prop, value, receiver);
                    if(props.includes(prop)) 
                        acao(target);
                    return retorno;
                }
        });
    }
    
    static _ehFuncao(func) {
        return typeof(func) == typeof(Function);
    }
}