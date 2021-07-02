let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};
let answer = names.map(function prepender(name){
    return 'My name is: '+name;
})
console.log(answer)
