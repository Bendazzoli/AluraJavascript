var botaoImportar = document.querySelector("#importar-paciente");
botaoImportar.addEventListener("click", function(){
    
    var erroImportacao = document.querySelector("#erroImportacao");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var pacientes = JSON.parse(xhr.responseText);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
        }else{
            erroImportacao.innerHTML = "";
            var li = document.createElement("li");
            li.textContent = "Problema ao importar pacientes. Erro: " + xhr.responseText;
            erroImportacao.appendChild(li);
            erroImportacao.classList.add("mensagem-erro");
        } 
    });

    xhr.send();

});