function is_palindromo(numero) {
    var palindromo='True';
    var numero_array=numero.toString().split('');
    var lunghezza_array=numero_array.length
    var i=0;
    while(i<numero_array.length-1){
        riverso=lunghezza_array-1-i;
        if(numero_array[i]==numero_array[riverso]&&palindromo=='True'){
            palindromo='True';
        }
        else if(numero_array[i]==numero_array[riverso]){
            palindromo='False';
        }
        else{
            palindromo='False';
        }

    i+=1;
    }
    return palindromo;


  }


var prodotto=0;
var risultati=[];
var limite=999;

for(let m = 100; m <= limite; m++){
    for(let n=100; n <= limite; n++){
        risultati.push(m*n);
    }
}

for(let s=0; s<risultati.length; s++){
    if(is_palindromo(risultati[s])=='True'){
        if(risultati[s]>prodotto){
            prodotto=risultati[s];
        }
    }
}

console.log(prodotto);
