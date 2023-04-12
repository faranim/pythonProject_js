numparticipants = parseInt(prompt("Syötä osallistujien mmäärä:"))
let x = 0;
let num;
num = [];

for (x === 0; x < numparticipants; x++) {
  num[x] = prompt("Syötä osallistujen nimet: ")
}
num.sort((a,b) => a > b ? 1: -1)
document.querySelector('#i1').textContent = "Olet valinnut "+ numparticipants +  " of participants. These are the names of the participants: " + num;