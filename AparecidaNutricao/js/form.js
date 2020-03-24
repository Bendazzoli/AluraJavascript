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