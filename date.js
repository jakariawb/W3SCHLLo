var date = new Date();
console.log(date);

console.log(new Date()) //outpot  new time

console.log(date.toDateString()) //outpot new date string

console.log(date.toTimeString())

console.log(date.getFullYear())

console.log(date.toLocaleTimeString())

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
