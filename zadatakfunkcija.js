
//for petlja za najdzžu riječ

var myNiz = ['ime ','prezime','godine', 'broj cipela', 'itd'];
function pronadjiNajduzuRijec (niz) {
    var najduzaRijec = '';
var duljina = 0;
for ( var ime of niz) {
    if (ime.length > duljina) {
        duljina = ime.length;
        najduzaRijec = ime;

    }
}
    return najduzaRijec;
}
//2
var najduzaRijec = pronadjiNajduzuRijec (myNiz);
//3
console.log(najduzaRijec);