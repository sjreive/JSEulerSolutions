var number = 35;
var a=0;
var factors = [];
for (i=2; i<number; i++){
    if (number%i === 0) {
        factors[a]=i;
        a++;
    }
}

console.log(factors);

for(j=factors.length-1; j>=0; j--){
    for(k=1; k<factors.length-1; k++)
    if (factors[j]%factors[j-k]===0)
    delete factors[j];
}
console.log(factors);

var largest= 0;
for (i=0; i< factors.length; i++){
    if(factors[i]> largest){
        largest = factors[i];
    }
}
console.log(largest);