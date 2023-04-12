let diceroll
let dice = parseInt(prompt("Syötä nopan luku:"))
let dicesum = 0;
for(let x = 0; x < dice; x++) {
  diceroll = Math.floor(Math.random() * 6)+1;
  dicesum += diceroll;
}
document.querySelector('#n1').innerHTML = " Nopan antama luku: " + dice + "."
    + " Noppa lukujen summa on: " + dicesum ;