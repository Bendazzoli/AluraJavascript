var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");


for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imcPossivel = true;

    if(peso <= 0 || peso >= 1000){
        imcPossivel = false;
        tdImc.textContent = "Peso inválido";
    }

    if(altura <= 0 || altura >= 3){
        imcPossivel = false;
        tdImc.textContent = "Altura inválido";
    }

    if(imcPossivel){
        tdImc.textContent = (peso / (altura*altura)).toFixed(2);
    }else{
        paciente.classList.add("paciente-invalido");
    }
}

var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    var formAdicionaPaciente = document.querySelector("#formAdicionaPaciente");
    var peso = formAdicionaPaciente.peso.value;
    var altura = formAdicionaPaciente.altura.value;
    var gordura = formAdicionaPaciente.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = formAdicionaPaciente.nome.value;
    pesoTd.textContent = formAdicionaPaciente.peso.value;
    alturaTd.textContent = formAdicionaPaciente.altura.value;
    gorduraTd.textContent = formAdicionaPaciente.gordura.value;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);
    
});