function text(n){
    function a(){
    return n%2 === 0;
}
function b(){
    return n%5=== 0;
}
    if(a()&&b()){
        console.log( n +" is dividible by both 2 And 5")
    }else{
        console.log("note a valit number")
    }
}
text()
