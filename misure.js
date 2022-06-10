function daPollici(){
    document.getElementById("metri").value=(document.getElementById("pollici").value/39.37);
    document.getElementById("centimetri").value=(document.getElementById("pollici").value/39.37*100);
}

function daMetri(){
    document.getElementById("pollici").value=(document.getElementById("metri").value*39.37);
    document.getElementById("centimetri").value=(document.getElementById("metri").value*100);
}

function daCentimetri(){
    document.getElementById("pollici").value=(document.getElementById("centimetri").value*0.3937);
    document.getElementById("metri").value=(document.getElementById("centimetri").value*0.01);
}

function daOnce(){
    document.getElementById("litri").value=(document.getElementById("once").value/33.814);
    document.getElementById("millilitri").value=(document.getElementById("once").value*29.574);
}

function daLitri(){
    document.getElementById("once").value=(document.getElementById("litri").value*33.814);
    document.getElementById("millilitri").value=(document.getElementById("litri").value*1000);
}

function daMillilitri(){
    document.getElementById("litri").value=(document.getElementById("millilitri").value/1000);
    document.getElementById("once").value=(document.getElementById("millilitri").value/29.574);
}

function daKelvin(){
    document.getElementById("celsius").value=(document.getElementById("kelvin").value-273.15);
    document.getElementById("fahrenheit").value=(9/5)*(parseInt(document.getElementById("kelvin").value))-459.67;
}

function daCelsius(){
    document.getElementById("kelvin").value=(parseInt(document.getElementById("celsius").value)+273.15);
    document.getElementById("fahrenheit").value=(parseInt(document.getElementById("celsius").value)*(9/5)+32);
}

function daFahrenheit(){
    document.getElementById("kelvin").value=parseInt((parseInt(document.getElementById("fahrenheit").value)-32)*(5/9))+273.15;
    document.getElementById("celsius").value=(parseInt(document.getElementById("fahrenheit").value)-32)*(5/9);
}

function daLibbra(){
    document.getElementById("kilogrammi").value=document.getElementById("libbra").value/2.205;
    document.getElementById("grammi").value=document.getElementById("libbra").value*454;
}

function daKilogrammi(){
    document.getElementById("libbra").value=document.getElementById("kilogrammi").value*2.205;
    document.getElementById("grammi").value=document.getElementById("kilogrammi").value*1000;
}

function daGrammi(){
    document.getElementById("libbra").value=document.getElementById("grammi").value/454;
    document.getElementById("kilogrammi").value=document.getElementById("grammi").value/1000;
}