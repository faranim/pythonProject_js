
let digits = [];
let digit;
while (true) {
  digit = parseInt(prompt("Syötä luku: "));
  if (digits.includes(digit)) {
    alert("Tämä luku on jo syötetty");
    break;
  }
  digits.push(digit);
}
const nr = digits.sort( (a, b) => a - b).map(items => `<li>${items}</li>`)
console.log(digits);
const result = document.querySelector('ul');
result.innerHTML = nr.join(" ");