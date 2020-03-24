var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro_paciente");
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
    tdImc.textContent = peso / (altura*altura);
}