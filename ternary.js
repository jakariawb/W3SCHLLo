var n = 10;
var str = "";

if (n % 2 === 0){
    str = "EVEN"
}else{
   str = "ODD"
}
console.log(str);
n = 11
// ternary 
var result = n % 2 === 0? "EVEN" : "ODD";
 console.log(result);

 n = 22;
 var result1 = n % 3 === 2 ? "Even" : "odd";
console.log( "?" + result1)

var number = 22;
var number1 = 3;
console.log(number % number1);

 number =  11;
 var result = number % 2 === 0?"Even number" : "odd";
 console.log(" number " + result)