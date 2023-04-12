let dice = parseInt(prompt("Kuinka monta noppaa haluat heittää?"));
function diceRoll() {
  return Math.floor(Math.random()* dice) + 1 ;
}
let r;
let list = [];
while (true) {
    r = diceRoll();
    list.push(r);
    if (r === dice){
        break;
    }
}

const result = document.querySelector('ul');
result.innerHTML = list.map(item =>`<li>${item}</li>`).join(" ");