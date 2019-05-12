var xhr = new XMLHttpRequest();
window.onload = function(){
    document.getElementById("btnPush").addEventListener("click",processAjax);
    alert("kisawea");
}

function processAjax(){    
    xhr.open("get","result.html");
    xhr.onload = functionCallback;
    xhr.send(null);
}

function functionCallback(){
    if(xhr.status == 200){
        console.log("Peticion procesada con éxito");
        document.getElementById("divResult").innerHTML = xhr.responseText;
    }
}