
function test1(a, b, callback) {
    callback();
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
function test2() {
    console.log('greater no. is')
   
}
test1(10, 20, test2)

