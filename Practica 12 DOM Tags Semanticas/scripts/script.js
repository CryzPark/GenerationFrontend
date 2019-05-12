window.onload = function(){
    var miBotoncito = 0;
    var testo = "";
    miBotoncito = document.getElementById("btnBoton");
    miBotoncito.addEventListener("click",miFuncion);

    document.getElementById("btnBorrar").addEventListener("click",borrarWeas);
    document.getElementById("btnRed").addEventListener("click",changeColor);
    document.getElementById("btnFill").addEventListener("click",llenarWea);
}

function miFuncion(){
    console.log("Diste click en el boton");
}

function borrarWeas(){
    testo = document.getElementById("parrawea").innerHTML;
    document.getElementById("parrawea").innerHTML = "";
}

function changeColor(){
    document.getElementById("parrawea").style.backgroundColor = "red";
}

function llenarWea(){
    document.getElementById("parrawea").innerHTML = testo;
}