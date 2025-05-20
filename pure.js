

 function sqr (n){
    return n+n
    
 }

console.log(sqr(3))

var a ={
    x:20,
    y:30,
}

function Name(a){
   a.x = 100;
   a.y = 200;
   console.log(a)
}
Name(a)


function b (n,l){
    return n-l
}
console.log(b(10,5))

var sum = b
console.log(sum(50,20));

var obj = {
    sum : b
}
console.log(obj)
console.log(obj.sum(40,20))

setTimeout(function(){
    console.log("i hhave creater")
}, 100)

