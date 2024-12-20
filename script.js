//Converting Fahrenheit to Celsius

document.getElementById("btn1").addEventListener("click", convert);

function convert() {
 
//Input
let fahr = +document.getElementById("inp1").value
 
//Process
let Math = (fahr - 32)* 5/9;
Math = Math.toFixed();
 
//Output
document.getElementById("out-put").innerHTML = Math;
document.getElementById("inp1").value = "";
}