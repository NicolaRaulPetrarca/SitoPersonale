var x='';
var a='';
function calcola(addendo1,addendo2,operazione){
    switch(operazione) {
        case 1:
            somma(addendo1,addendo2);
            break;

        case 2:
            divisione(addendo1, addendo2);
            break;

        case 3:
            sottrazione(addendo1, addendo2);
            break;

        case 4:
            moltiplicazione(addendo1, addendo2);
            break;

        default: 
            alert(uffa);                        
    }
}
function stampa(x){
    if (a==''){
        document.getElementById("addendo1").innerHTML = x;}
    else {
        document.getElementById("addendo2").innerHTML = x;
    }
}

function somma(addendo1,addendo2){
    document.getElementById("output").innerHTML = (parseInt(addendo1)+parseInt(addendo2));
}

function sottrazione(addendo1, addendo2){
    document.getElementById("output").innerHTML = (parseInt(addendo1)-parseInt(addendo2));  
}

function moltiplicazione(addendo1, addendo2){
    document.getElementById("output").innerHTML = (parseInt(addendo1)*parseInt(addendo2)); 
}

function divisione(addendo1, addendo2){
    document.getElementById("output").innerHTML = (parseInt(addendo1)/parseInt(addendo2));
}