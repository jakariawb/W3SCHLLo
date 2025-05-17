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