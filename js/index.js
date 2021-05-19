var nome = "Cristiane da Silva";
var cargo = "Desenvolvedora"
var nomehtml = document.getElementById("nome-do-html");
var cargohtml = document.getElementById ("cargo-no-html");
var texto1 = document.getElementById ("texto-1");
var texto2 = document.getElementById ("texto-2");



function colocarnomenohtml(nome) {
    nomehtml.innerHTML = nome;
}

function colocarcargonohtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function logarnome() {
    console.log(none)
}

function cliquenoprojetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliquenosobre() {
  console.log("Clicou no botão sobre");
  texto1.style.display = "block";
  texto2.style.display ="none";
}

colocarnomenohtml(nome);
colocarcargonohtml(cargo);

