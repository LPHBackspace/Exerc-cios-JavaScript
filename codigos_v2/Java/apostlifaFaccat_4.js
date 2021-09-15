var eleitores = parseInt(prompt("Quantos eleitores existem no seu município:"));
var brancos = parseInt(prompt("Informe a quantidade de votos brancos:"));
var nulos = parseInt(prompt("Informe a quantidade de votos nulos:"));
var validos = parseInt(prompt("Informe a quantidade de votos válidos:"));
var porcentoB = (brancos / eleitores) * 100;
var porcentoN = (nulos / eleitores) * 100;
var porcentoV = (validos / eleitores) * 100;
alert(
    "Porcentagem de votos brancos: " + porcentoB + "%" +
    "\nPorcentagem de votos nulos: " + porcentoN + "%" +
    "\nPorcentagem de votoss válidos: " + porcentoV + "%"
);