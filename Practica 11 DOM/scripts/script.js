/*
//Metodo Vieja escuela
window.onload = main();

function main(){
    alert("Kisawea");
}
*/

/* 
//Metodo Clásico
window.onload = function(){
    alert("Kisawea x2");
}
*/

/*
//Metodo Milenial
window.onload = () =>
{
    alert("Kisawea x3");
}
*/

/*
//Metodo de huevones bien pasado de lanza!!
$(function()
{
    alert("Kisawea x4");
});

//Ah! Vayanse alv xdxdxd
$(()=>
{
    alert("Kisawea x5");
});

*/

window.onload = function()
{
    var miBotoncitoMatar = 0;
    miBotoncitoMatar = document.getElementById("btnMatar");
    console.log(miBotoncitoMatar);
    miBotoncitoMatar.onclick = mensajeMatar;

    document.getElementById("divParrafo").onmouseenter = mensajeConsola;

    document.getElementById("divParrafo").onmouseleave = function() { // Función anónima - JavaScript
        console.log("Saliste del div");
    }

    document.getElementById("divParrafo").ondblclick = ()=> // Función Flecha - EcmaScript6
    {
        console.log("No");
    }
}

function mensajeMatar()
{
    alert("Weon");
}

function mensajeConsola()
{
    console.log("Entraste al div");
}