const answer = confirm('Haluatko, että lasken neliöjuuren?')
console.log(answer);
let neliojuuri = 0
if (answer === true) {
  const  neliojuuri = parseInt(prompt("Syötä numero: "))
  if (neliojuuri < 0) {
    document.querySelector('#a1').innerHTML = neliojuuri + " Numero on negatiivinen!";
  }
  else {
    document.querySelector('#a1').innerHTML = ("Numero " + neliojuuri + " neliöjuuri on ") + Math.sqrt(neliojuuri);
  }
}
else {
  document.querySelector('#a1').innerHTML = "The square root is not calculated!"}