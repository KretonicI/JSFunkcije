function getMax (a,b){
    let retVal = 0;

    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'nisu svi parametri brojevi';
    }
    
    if (a>b){
        retVal = a;
    }
    else if (b>a) {
        retVal =b;
    }
    else if (a===b){
        retVal = a;
    }
    else {
        retVal= 'kruške i jabuke nisu isto';
    }
    return retVal;
}
console.log('Veći broj je: ' + getMax('a',25) );
