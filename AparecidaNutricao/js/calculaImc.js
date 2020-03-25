var pacientes = document.querySelectorAll(".paciente");


for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        tdImc.textContent = "Peso inválido";
    }

    if(!alturaValida){
        tdImc.textContent = "Altura inválido";
    }

    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(peso, altura);
    }else{
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 1000){
        return false;
    }
    return true;
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3){
        return false;
    }
    return true;
}

function calculaImc(peso, altura){
    return (peso / (altura*altura)).toFixed(2);
}