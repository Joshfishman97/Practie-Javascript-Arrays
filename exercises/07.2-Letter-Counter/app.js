let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let arr = [];
// your code here

let parWithoutSpace = par.replace(/\s+/g, '');
let arrayOfLetters = parWithoutSpace.split("")
for(let i = 0; i<arrayOfLetters.length; i++){
    const letter = arrayOfLetters[i];
    if(counts[letter.toLowerCase()] == undefined) counts[letter.toLowerCase()] =1;
    else counts[letter.toLowerCase()] = counts[letter.toLowerCase()] + 1;
    
}
console.log(counts);