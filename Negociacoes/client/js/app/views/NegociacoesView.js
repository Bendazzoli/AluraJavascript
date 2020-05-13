class NegociacoesView extends View {
    
    constructor(elemento) {
        
        //super porque eu quero dizer "o classe mãe, passa ai o elemento para o seu construtor".

        // se eu utilizar do this._elemento = elemento;
        //  Eu não estou utilizando do código que já existe na classe mãe
        super(elemento);
    }
    
    template(model) {
        
        // Template string: é assim ` e não assim ' ??? PORQUE ???
        // '' eu teria que ficar concatenando linha a linha para entender todo o HTML como string
        // `` não preciso ficar concatenando, ele entende o "pular linha"

        //.join('') no final, é para tornar a Stringona 
        // (formanda por ter percorrido o array de negociacoes) em uma string única.
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.volumeTotal}
                </td>
            </tfoot>
            
        </table>
        `; // colspan = 3, no caso, que ele pule 3 colunas e inclua na 4 coluna o TD desejado.
    }
}
