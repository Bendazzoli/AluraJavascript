var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro_paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

tdImc.textContent = peso / (altura*altura);
