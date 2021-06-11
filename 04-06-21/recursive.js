
function factorial(x){
    if(x == 0){
        return 1;
    }
    else{
        return x * factorial(x - 1);
    }
}
let a = 5;
if(a > 0){
    let r = factorial(a);
    console.log(r);
}