    const first = parseInt(prompt("Syötä ensimmäinen vuosi:luku "))
const second = parseInt(prompt("Syötä toinen vuosiluku: "))
let str = '';

let i;

for ( i = first; i < second; i += 1 ) {
    if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
        str += '<li>' + i + "</li>";
    }
}
document.body.innerHTML = str;