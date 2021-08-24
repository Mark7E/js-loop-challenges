for ( var i=1; i<20; i++){
    if (i % 2 == 1){
    console.log (i)
}
}

for (var i=100; i>0; i--){
    if (i%3 ==0){
    console.log (i)
    }
}


//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5//

var arr = [4, 5, 1, -0.5, -2, -3.5];
for (var i=0; i<arr.length; i++){
    
    console.log (arr[i]);
    
}

// Write code that will add all of the values from 1-100 onto some variable sum
// and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end

function sumof100() {
    var sum = 0;
for (i=1; i <=100; i++) {

    sum += i;
}

console.log (sum);
}

sumof100 (100)



// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log
//  the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var product= 1
    
        for (i=1; i<12; i++){

        product= product * arr[i]


        }
    
console.log (product);