// just number
var n = 1221;
console.log(n)

// folating Number
var f = 22.33;
console.log(f)

// MAX NUmber 1.7976931348623157e+308
console.log(Number.MAX_VALUE)

// number min safe integer
console.log(Number.MIN_SAFE_INTEGER)

// out put infinity
console.log(1/0);

// out put NAN
console.log("an"*12)

// -----string------
// string literal
var name1 = "jakaria";
var profession1 = "developer"
console.log(name1,profession1)

var name = ("jakaria")
var woliteName = ("levis's")

// number convert for string
// var favouriteNumber = string(10);
// var angryNumber = string(222.0);
// console.log(favouriteNumber, angryNumber)

// bulien datatype
var b1 = true;
var b2 = false;

console.log(b1,b2);

// echo "# W3SCHLLo" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jakariawb/W3SCHLLo.git
//     git push --set-upstream origin main ma

console.log('')
console.log(Boolean('no'));

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(233));
console.log(true)

var n = true;

console.log(n.toString());

// hexadecimal and octal
var  hex = 0xff;
console.log(hex);
// octal
// var oct = 0756; 
// console.log(oct);
var a = 21;
var b = 2;
console.log(a % b);
console.log(a / b);

var postIncrementalNumber = 22;
console.log(postIncrementalNumber++);
console.log(postIncrementalNumber);
var preIncrementalNumber = 22;
console.log(++preIncrementalNumber) ;

// assignment operator 
var t = 20;
var r = 10;

t += r
console.log(t)

t -= r
console.log(t)

t*=r;
console.log(t);

t %= r;
console.log(t)

t /= r;
console.log(t)


var t = 10;
var r = 20;
sum = t + r;
console.log(sum)
console.log("Yes " + t > r); //true
console.log("No "+ t < r);
console.log("Yes " + t >= r); //true
console.log("No "+ t <= r);
// compariosn operators

var a = 10;
var b = 20;
console.log(a != b);//true

console.log(a == b);//false
