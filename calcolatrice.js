var x = new String;
function calcola(addendo1,addendo2,operazione){
    stampa(eval(x));
    x="";
}

function stampa(x){
        document.getElementById("addendo").innerHTML = x;
}

function somma(addendo1,addendo2){
    document.getElementById("risultato").innerHTML = (parseInt(addendo1)+parseInt(addendo2));
}

function sottrazione(addendo1, addendo2){
    document.getElementById("risultato").innerHTML = (parseInt(addendo1)-parseInt(addendo2));  
}

function moltiplicazione(addendo1, addendo2){
    document.getElementById("risultato").innerHTML = (parseInt(addendo1)*parseInt(addendo2)); 
}

function divisione(addendo1, addendo2){
    document.getElementById("risultato").innerHTML = (parseInt(addendo1)/parseInt(addendo2));
}

