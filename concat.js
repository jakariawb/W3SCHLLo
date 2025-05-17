var  a = "md" 
var b = "jakaria"
var c =  a.concat( " ", b )
var s = c.substr(5)
console.log(c.charAt(5));
console.log(c.startsWith("md"));

console.log(c.endsWith("jakaria"));
console.log(c.endsWith('Nayme'));
console.log("    Name   ".trim());

var Name = "anisul islam anise";
console.log(Name.split(" "));

var str = "Name Of Out"
var length = 3
while(true){
    if(str.charAt(length) == ""){
        break
    }else{
        length++
    }
}
console.log(length)

var number = "1,2,3,3,32,23,2,323,232,323,232323,23,232,323,232,323,232,32,32,32,32,32,3232,323";
console.log(number.length)