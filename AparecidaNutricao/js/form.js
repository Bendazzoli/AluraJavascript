var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formAdicionaPaciente");

    //Extrai informacoes do paciente do form
    var paciente = obtemPacienteDoForm(form);
    
    var mensagemErro = document.querySelector("#mensagemErro");
    if(!validaPaciente(paciente)){
        return;
    }
    
    //Monta o TR e os TDs
    var pacienteTr = montaTr(paciente);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);
    
    form.reset();
});

function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    mensagemErro.textContent = "";

    if(!validaPeso(paciente.peso)){
        erros.push("Peso informado é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura informada é inválida!");
    }

    if(paciente.nome == ""){
        erros.push("Nome do paciente é um campo obrigatório!");
    }

    if(paciente.gordura <= 0 || paciente.gordura > 100){
        erros.push("% de gordura é inválido!");
    }

    if(erros.length > 0){
        listaMensagensErros(erros);
        return false;
    }
    return true;
}

function listaMensagensErros(erros){
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        mensagemErro.appendChild(li);
    });
    mensagemErro.classList.add("mensagem-erro");
}