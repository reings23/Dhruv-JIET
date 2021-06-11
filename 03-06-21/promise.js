let mypromise = new Promise((myResolve, myReject) => {
    let a = 7;
    let b = 4;
    if (a * b > a * a) {
        myResolve("Promise Succes");
    }
    else {
        myReject("Promise Failed");
    }
});
mypromise
.then((value) => {
        console.log(value);
    })
.catch((value) => {
        console.log(value);
    });