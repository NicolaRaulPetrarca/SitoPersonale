var x = new String;
function calcola(){
    stampa(eval(x));
    x="";
}

function stampa(x){
        document.getElementById("addendo").innerHTML = x;
}
