
var date = new Date()

var today = date.getDay();
switch (today) {
    case 0:
      console.log("Today is Sunday");
         break
    case 1:
        console.log("Today is Monday");
         break
    case 2:
        console.log("Today is Tuesday");
         break
    case 3:
        console.log("Today is Wednesday");
         break
    case 4:
        console.log("Today is Thursday");
         break

    case 5:
        console.log("Today is Friday");
         break
    case 6:
        console.log("Today is Saturday");
         break
    default:
        console.log("Not a number")
}

var job = true;
var saliry = 31
var bcs = true

if (job && saliry > 30 && bcs){
    console.log("ami bay korbo")
}else{
    console.log("na tui amir na")
}

var result = 10;
var number = 999;
var gpa = 4.75;
if (result < 11 || number < 1000 || gpa < 5){
    console.log("aso bow kobule")
}else{
    console.log("bage tui mokbul")
}