var num1 = 0;
var num2 = 0;
var suma = 0;

num1 = parseInt(prompt("Dame la primer Wea"));
num2 = parseInt(prompt("Dame la segunda Wea"));

suma = num1 + num2;

if(isNaN(suma))
{
    console.log("Is not a Wea");
}else{
    console.log("La suma de las Weas es: " +suma);
}

for(var i = 0; i<10 ; i++){
    console.log(i+1);
}

var numDay = parseInt(prompt("Inserta el dia de la Semana"));

switch(numDay){
    case 1: console.log("Domingo"); break;
    case 2: console.log("Lunes"); break;
    case 3: console.log("Martes"); break;
    case 4: console.log("Miercoles"); break;
    case 5: console.log("Jueves"); break;
    case 6: console.log("Viernes"); break;
    case 7: console.log("Sabado"); break;
    default: console.log("El dia no existe"); break;
}

var arreFast = [12, 45, "This wea es un texto"];

var myArre = [];
myArre[0] = "Hi!";
myArre[1] = "Kisawea";
myArre[2] = "All";

var otherArre = [];
otherArre[0] = "Parangaricutirimicuaro";
otherArre[1] = 1245;
otherArre[2] = 0.78;
otherArre[3] = true;

for(var i=0; i<arreFast.length; i++){
    console.log(arreFast[i]);
}
for(var i = 0; i<myArre.length; i++){
    console.log(myArre[i]);
}
for(var i = 0; i<otherArre.length; i++){
    console.log(otherArre[i]);
}

console.log(arreFast);