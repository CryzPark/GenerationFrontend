var xhr = new XMLHttpRequest();

window.onload = function(){
    document.getElementById("btnPush").addEventListener("click",processAjax);
}

function processAjax(){
        xhr.open("get", "resultado.html", true);
        xhr.onreadystatechange = functionCallBack;
        xhr.send();

    }

function functionCallBack(){
    if(xhr.readyState==1){
        console.log("We are in state 1");
    }else if(xhr.readyState==2){
        console.log("We are in state 2");
    }else if(xhr.readyState==3){
        console.log("We are in state 3");
    }else if(xhr.readyState==4 && xhr.status==200){
        console.log("We are in state 4");
        document.getElementById("divResult").innerHTML = xhr.responseText;
    }
}