let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumel = document.getElementById("sum-el")
let subel = document.getElementById("sub-el")
let mulel = document.getElementById("mult-el")
let divel = document.getElementById("div-el")

function add()
{
    let result = num1 + num2;
    sumel.textContent = "Sum: " + result;
}
function sub()
{
    let result = num1 - num2;
    subel.textContent = "Sum: " + result;
}
function mult()
{
    let result = num1 * num2;
    mulel.textContent = "Sum: " + result;
}
function div()
{
    let result = num1 / num2;
    divel.textContent = "Div: " + result;
}