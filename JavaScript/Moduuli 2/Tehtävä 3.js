
koirat = []
let u = 0;

for (u === 0; u < 6; u++) {
  koirat[u] = prompt("Syötä koirien nimet: ")
}
koirat.sort((a,b) => a > b ? -1: 1)
document.querySelector('#r1').textContent = "Tässä on syöttämiesi korien nimet: "+ koirat;