let usuario = require("readline-sync");
let nomeUsuario = usuario.question("Informe seu nome completo: ");
let idadeUsuario = require("readline-sync");
let idade = idadeUsuario.question("Informa sua idade: ");

if(idade < 18){
  console.log("Tem que ser maior de idade para poder participar do evento!");
}
else {
  console.log("Seja bem vindo " + nomeUsuario);    
}
var dataEntrada = require("readline-sync");
var dataUsuario = parseFloat(dataEntrada.question("Para continuar com o cadastro é necessário informar qual a data do evento:"));
var dataAtual = 31/05/2022;

if(dataUsuario <= dataAtual){
  console.log("Data invalída, verifique a data e tente novamente!");
}
else{
  var convidados = require("readline-sync");
  var numConvidados = convidados.question("Para finalizar o cadastro informe a quantidade de convidados: ");
  if(numConvidados >= 100){
    console.log("Quantidade de convidados já chegou ao limite!")
  }
  else {
    console.log("Evento cadastrado com sucesso!");
  }
}

console.log("Fim do programa!");