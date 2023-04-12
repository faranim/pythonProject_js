const num1 = parseFloat(prompt("Syötä ensimmäinen numero:"))
const num2 = parseFloat(prompt("Syötä toinen numero:"))
const num3 = parseFloat(prompt("Syötä kolmas numero:"))

const sumint = num1 + num2 + num3
const productint = num1 * num2 * num3
const averageint =  sumint / 3

document.querySelector('#p1').innerHTML = " Summa = " + sumint;
document.querySelector('#p2').innerHTML = " Tulo = " + productint;
document.querySelector('#p3').innerHTML = " Keskiarvo = " + averageint;