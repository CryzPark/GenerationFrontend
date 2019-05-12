/*holaWorld();
Saludar("Kiuvoles");

function holaWorld(){
    console.log("K onda k pex");
}

function Saludar(sms){
    console.log(sms);
}

//suma de weas
console.log(suma(3,10));
var num1 = parseInt(prompt("First Wea"));
var num2 = parseInt(prompt("Second Wea"));
console.log(suma(num1,num2));

function suma(num1, num2){
    return num1 + num2;
}

var numP = parseInt(prompt("Insert tu prima here!"));
console.log("Tu prima es primo? "+isPrimo(numP));
for(var i=0; i<10; i++){
    console.log("Numero: "+i+"  isPrimo: "+isPrimo(i));
}

function isPrimo(yourPrima){
    var isYourPrima = true;
    for(var i = 2; i<yourPrima; i++){
        if(yourPrima%i==0){
            isYourPrima = false;
        }
    }
    return isYourPrima;
}

var arreCSW = [];
var numElements = parseInt(prompt("Cuantas Weas Vas a Ingresar?"));
for(var i = 0; i<numElements; i++){
    arreCSW[i] = Math.floor(Math.random()*100);
}

console.log(arreCSW);
console.log("Numeros Pares: "+numPares(arreCSW));
console.log("Numeros Impares: "+numImpares(arreCSW));
console.log("Numeros NaN: "+numNaN(arreCSW));

function numPares(arreglo){
    var contPares = 0;
    for(var i = 0; i<arreglo.length; i++){
        if(arreglo[i]%2==0){
            contPares++;
        }
    }
    return contPares;
}

function numImpares(arreglo){
    var contImpares = 0;
    for(var i = 0; i<arreglo.length; i++){
        if(arreglo[i]%2!=0 && !isNaN(arreglo[i])){
            contImpares++;
        }
    }
    return contImpares;
}

function numNaN(arreglo){
    var contNaN = 0;
    for(var i = 0; i<arreglo.length; i++){
        if(isNaN(arreglo[i])){
            contNaN++;
        }
    }
    return contNaN;
}

var fact = parseInt(prompt("Factorial!! Numero: "));
console.log("El Factorial de "+fact+" es: "+factorial(fact));

function factorial(num){
    var acumFact = 1;
    for(var i=1; i<=num; i++){
        acumFact*=i;
    }
    return acumFact;
}


var fibNum = parseInt(prompt("Hasta que numero quieres la serie"));
fibonacci(fibNum);

function fibonacci(indiceFib){
    var a = 0;
    var b = 1;
    var c = 0;
    for(var i = 0; i<indiceFib; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(a);
    }
}
*/

var nivelPriamide = 6;//parseInt(prompt("Hasta que nivel de la piramide quieres?"));
trianglePsacal(nivelPriamide);

function trianglePsacal(nivel){
    
}