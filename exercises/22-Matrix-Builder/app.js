
function matrixBuilder(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        let arrayInner = [];
        console.log('creatinganaaray',i)
        for (let j = 0; j < number; j++) {
           console.log('addingitemsintoanarray',j)
            arrayInner.push(Math.round(Math.random()))
        } 
        array.push(arrayInner)
    }
    return array;
}



// do not change anything from this line down
console.log(matrixBuilder(5))