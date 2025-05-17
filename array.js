// var  arr = [1,2,3,4,4,5,6];
// var length = 0;
// while(true){
//     if(arr.charAt(length) == ""){
//         break
//     }else{
//         length++ 
//     }
// }
// console.log(length)

// var Number = [1,2,3,6,7];
// Number[8] = 10; 

// Number [6] = 44;

// Number[3] = 44; 
// console.log(Number)
// console.log(Number) 
// console.log(Number)
// console.log(Number[7]);

// array traverse 

var travers1 =  [1,2,3,4,6];
for(var y = 0; y < travers1.length; y++){
    console.log(travers1[y])
}
    



var travers = [1,2,3,4,5,6,7,44];

for(var i = 0; i < travers.length; i++){
    // console.log(travers[i])
    travers[i] = travers[i] + 3
}
console.log(travers);

var Number  = [1,2,3,4,5,6,7,8]
Number.splice(3, 3 ,10)
Number.splice(8 , 8 , 44)
console.log(Number);


var  newArray = [1,2,3,4,5,6,7,8,2,3];
var fin = 3 ;
var isFound = false;
for(var i = 0; i < newArray.length;i++){
     if(newArray[i] === fin){
        console.log("data Found" + i);
        isFound = true
        break
     }
       
}
if(!isFound){
    console.log("data not found")
}


var info = ['jakaria' , 'age 24', 'devloper' ,'Md jakaria'];
var infoType = ['Md jakaria'];
var info2 = false;

for(var a = 0; a < info.length; a++){
    if(info[a] == infoType){
        console.log("data finde " + a);
        info2 = true;
        break
    }
}
if(!info2){
    console.log("note found data")
}

var frend = ['abul','sabul', 'kabul','salam'];
var frend3 = ['salam'];
var frend2 = false; 
for(var s = 0; s<frend.length; s++){
    if(frend[s] == frend3){
        console.log('My frend ' + s)
        frend2 = true;
        break
    }
}
if(!frend2){
    console.log("frend note found")
};
// malti Dimensional Array

// to Dimensional Array
var marks = [
    [100,23 ,44,33,33],
    [66,88,44,88,99],
     [66,88,44,88,99]
]
console.log(marks)
// console.log(marks[0][3])
// console.log(marks[1][0])
for (var x = 0 ; x < marks.length; x++){
     for (var z = 0 ; z<marks[x].length ;z++){
        console.log("Element" + x + '  ' + marks[x][z]);
     }
}

var marks2 = [
    [100,23 ,44,33,33],
    [66,88,44,88,99],
     [66,88,44,88,99]
]
console.log(marks2)
for(var u = 0; u<marks2.length; u++){
    for(var v = 0; v <marks2[u].length; v++){
        console.log("elment2" + u + '  '+ marks2[u][v])
    }
}

var Name2 = [
    ["jakaria", "kalam", "salam"],
    ['nantu','muntu', 'jumtu'],
    ['fokre', 'pro','nano']
]
console.log(Name2);
for(var k = 0 ; k <Name2.length; k++){
    for(var l = 0 ; l <Name2[k].length;l++){
        console.log("name loops" + k + "  " + Name2[k][l])
    }
}