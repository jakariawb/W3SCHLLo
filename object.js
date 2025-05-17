// var obj = {}
// obj.x = 10;
// console.log(obj)
// // console.log(typeof obj)

// //object leatrlei
// var point = {
//     x:10,
//     n:20,
//     b:30
// }

// //object chinge
// point.x = 5;

// //object add
// point.c = 40;

// console.log(point)

// //object constort
// var  h = Object();
// h.a = 20;
// console.log(h)

// var obj2 = new Object();
// obj2.t = 40;
// console.log(obj2)

var point = {
    x:10,
    y:20,
    z:30,
}
console.log(point.y);
console.log(point.x + point.z)
// array notison
console.log(point['x'])
var show = 'x';
console.log('shoe Number = '+point[show])
point.x = 44;
console.log(point)
point.j = 22;
console.log(point)
point.j = 55;
console.log(point)
delete point.j
console.log(point)