    
//The Code here converts Celsius to Fahrenheit
    
document.getElementById('btn_c-f').onclick = function(){ 
var input = document.getElementById('c-f').value;
var result = (input)*(9/5) + 32;

document.getElementById('result').textContent = input +"Celsius = "+ result+"Fahrenheits" ;}
                        


//The Code here converts to Fahrenheit to Celsius

document.getElementById('btn_f-c').onclick = function(){ 
var input = document.getElementById('f-c').value;
var result = ((input)-32) * (5/9);
document.getElementById('result').textContent = input +"Fahrenheits = "+ result+"Celsius" ;}


//The Code here converts Celsius to Kelvin

document.getElementById('btn_c-k').onclick = function(){ 
var input = document.getElementById('c-k').value;
var result = Number(input) + 273;
document.getElementById('result').textContent = input+"C = "+result+"K" ;}

 //The Code here converts kelvin to celsius

document.getElementById('btn_k-c').onclick = function(){ 
var input = document.getElementById('k-c').value;
var result = 273 - Number(input);
document.getElementById('result').textContent = input+"K = "+result+"C" ;}