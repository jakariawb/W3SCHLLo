function Number (){
   var sum = 0
    for(var i = 0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}
var result = Number(1,23,4,2)
console.log(result)
// Number(1,23,4,2)

function Name1(Name,Email){
    return{
        Name:Name,
        Email:Email
    }
}
var output = Name1('Md jakaria' , "sfjsdire3")
console.log(output)

// inner function
function firstFunc (){
    console.log("bay")
    function twrdfunc(){
       console.log("hello")
    }
    twrdfunc()
}
firstFunc()