function sumiraj (a,b){
    
if (typeof a !== 'number' || typeof b !== 'number'){
    return 'error';
}
return a + b;
}
console.log(sumiraj(2 , 3));

var prvi = sumiraj ('3',5);
var drugi = sumiraj ('5',5);
if (prvi !== 'error' && dugi !== 'error' ){
    var dvaPutaSuma = prvi * drugi;
    console.log(dvaPutaSuma);
} else{
    console.log ('ne mogu izračunati');

}

function podijeli(a,b) {
    if ( b==0){
        console.log˙('dijeljene s nulom nije definirano');
        return 'error'
    }
    return a / b;

}
var dijeljeno = podijeli (12,0);
console.log('rezultat dijeljena: ' + dijeljeno);
