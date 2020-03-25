var botaoImportar = document.querySelector("#importar-paciente");
botaoImportar.addEventListener("click", function(){
    
    //importar paciente-> http://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var pacientes = JSON.parse(xhr.responseText);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();

});