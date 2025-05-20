var obj = {
    x:20,
    y:10,
    t:30
}
console.log('x'in obj);
console.log("p" in obj);
for(var v in obj){
    console.log(v);
    console.log(obj[v])
}
var obj1 = {
    x:20,
    y:10,
    t:30
}
console.log(Object.keys(obj));//পোপাটি আউটপুট করবে
console.log(Object.values(obj));//পোপাটি ভেলু আউটপুট আসবে
var obj2 = obj;
obj2.x  = 70;//মান পালটানো হইচে
console.log(obj1)
console.log(obj2)

var ovj3 = Object.assign({ }, obj1)
obj2.j = 299;// object এর বেতর নতুণ একটা ভেলু অ্যাড করা হল
console.log(obj1);
console.log(obj2)
