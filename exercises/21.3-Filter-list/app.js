let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];


function filterByName(arrayA,token){
    return arrayA.filter(function(name){
        let lowerCaseName = name.toLowerCase();
        let lowerCaseToken = token.toLowerCase();
        return lowerCaseName.includes(lowerCaseToken.toLowerCase())
    })
}


// function filterByName(arrayA,token){
//     return arrayA.filter(name=> name.toLowerCase().includes(token.toLowerCase()))
// }

console.log(filterByName(names, 'am'));