const vuosiluku = parseInt(prompt("Syötä vuosiluku: "))
if (vuosiluku % 4 === 0 && (vuosiluku % 100 !== 0 || vuosiluku % 400 === 0)) {
  document.querySelector('#v1').innerHTML = (vuosiluku + " on karkaus vuosi.")
}
else if (vuosiluku) {
  document.querySelector('#v1').innerHTML = (vuosiluku + " ei ole karkaus vuosi.")
}