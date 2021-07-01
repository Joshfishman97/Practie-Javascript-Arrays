

var myNumbers = [23,234,345,4356234,243,43,56,2];

var newArray = myNumbers.map(function myFunction(item, index,arr){
    return item * 3;
});
function myFunction(){
    for(let i =0;  i<newArray.length; i++)
    console.log(newArray.length[i])
}
console.log(newArray);