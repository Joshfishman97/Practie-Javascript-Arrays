var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
var aux = 0
for (var index in myArray){
    aux += myArray[index] 

	
}
let avg = aux/myArray.length
console.log(avg);
//1.declare variable aux with a value of zero
//2.loop the array to add all the numbers
//3.inside the loop add the elements to the accumlator
//4. consolelog aux/the length of the array