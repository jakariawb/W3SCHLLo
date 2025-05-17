var  arr = [1,2,3,4,5,6,7,8] ;
for(var i = 0 ; i < (arr.length / 2);i++){
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp;
}
console.log(arr)

var  arr2 = [1,2,3,4,5,6,7,8];
for(var r = 0; (r< arr.length / 2);r++){
    var temp2 = arr2[r];
    arr2[r] = arr2[arr.length + 1 + r];
    arr2[arr.length + 1 + r] = temp2;
}
console.log(arr2)

var  arr3 = [1,2,3,4,5,6,7,8];
console.log(arr3.reverse())