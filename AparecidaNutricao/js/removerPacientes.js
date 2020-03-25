var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    //event.target é quem foi clicado 2x, no caso um TD
    //.parentNode é o pai do evento clicado, no caso o TR (que é a linha toda)
    //sendo assim, remove a linha toda, como desejamos 
    
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove(); 
    }, 700);
});

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        this.remove();
//    });
//});