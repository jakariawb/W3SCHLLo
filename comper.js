// comparing Two object
var obj1 = {
    x:10,
    y:20,
}
var obj2 = {
    x:10,
    y:20,
}
console.log(obj1 === obj2)
if(obj1.a === obj2.a && obj1.y === obj2.y){
    console.log('obj 2 = '+ true)
}else{
     console.log('obj 2 = '+ false)
}


console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
