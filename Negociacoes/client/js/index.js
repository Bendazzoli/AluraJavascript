var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')  
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
  
   //Para não recarregar a tela assim que o form é submetido à mudanças
   event.preventDefault();
   
   var tr = document.createElement('tr');
   
   //Para cada campo, eu crio uma TD (coluna)
   campos.forEach(function(campo) {
       
       var td = document.createElement('td');
       
       //Para cada coluna eu submeto o valor de cada campo
       td.textContent = campo.value;

       //e coloco para cada TD (coluna), uma nova TR (linha)
       tr.appendChild(td);
   });
   
  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value; 
  
  tr.appendChild(tdVolume);
  
  tbody.appendChild(tr);
  
  //Após submeter os campos no formulário, eu "limpo" os campos e 
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  //mando o foco para o primeiro campo, que no caso é a DATA
  campos[0].focus();
   
});