
//initializer
for (i = 0 ; i < 100; i++){
          //condition
   console.log(i + 'jakaria')
}

for (var t = 1; t < 100; t++){
    if(t % 2 === 1){
        console.log(t + "odd number")
    }
    if(t % 2 === 0){
        console.log(t + "even number")
    }
}

// var sum = 0;
// for(var y = 1; y <= 10; y++){
//     console.log(sum + "+" + y + "= " + (sum + y) )

//     sum += y;
// }
// console.log('result = ' + sum)

var sum1 = 0;
for (var u = 6; u <= 20 ; u++){
    console.log(sum1 + ' - ' + u + '= ' + (sum1 - u))
    sum1 -= u;
}
console.log("result =" + sum1);

var sumNumer = 1 ;
for(var a = 1; a <= 20; a++){
    console.log(sumNumer + ' % ' + a + ' = ' + (sumNumer % a))

    sumNumer %= a;
}
console.log("result = " + sumNumer);