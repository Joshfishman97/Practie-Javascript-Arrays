

var myNumbers = [23,234,345,4356234,243,43,56,2];
function myFunction(item, index,arr){
    return item * 3;
}
var newArray = myNumbers.map(myFunction);

console.log(newArray);