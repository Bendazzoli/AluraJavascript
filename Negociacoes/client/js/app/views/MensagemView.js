class MensagemView extends View {
    
    constructor(elemento) {
        
       super(elemento);
    }
    
   template(model) {
       
    //if ternário em caso de não houver texto preenchido para mensagem
    // não fica carregando um objeto do bootstrap vazia
    // em Javascript, um atributo NULL, UNDEFINIED ou VAZIO é falso!
       return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
   }
}