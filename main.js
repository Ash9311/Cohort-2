let fName = "ashutosh";
let lName = "mulky"
let a = [1,2,3,4,5,6,723,4,3,32]

for(let i =0;i<a.length;i++){
    if(a[i]%2==0) console.log(a[i])
}

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum