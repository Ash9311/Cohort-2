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

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.  [{"category": "Food", "totalSpent": 10}]     
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
let transaction = [
  {itemName:'apple',category:'fruit',price:'200'},
  {itemName:'banana',category:'fruit',price:'100'},
  {itemName:'pen',category:'stationary',price:'20'},
  {itemName:'paper',category:'fruit',price:'10'},
  ,{itemName:'mango',category:'fruit',price:'150'}
]
calculateTotalSpentByCategory(transaction);
function calculateTotalSpentByCategory(transactions) {
  const categoryGroup = {};
  transactions.forEach(transaction=>{
    const {category,price} = transaction;
    categoryGroup[category]=(categoryGroup[category]||0) + Number(price); // '||' is used bcz when on first iteration v get current value as null before assigning
  })
//format ans as per test cases
  let result = [];
  for(let category in categoryGroup){
    result.push({"category":category,"totalSpent":categoryGroup[category]});
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
