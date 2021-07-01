var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{ let filterArray = [];
people.forEach(function(item,index,arr){
if(item !=personName){
    filterArray.push(item)}
})
return filterArray;
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));