let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

function mergeTwoList(arrayOfNumbers) {
    let even = [];
    let odd = [];
    arrayOfNumbers.forEach(function (item, index, arr) {
        if (item % 2 === 0) { even.push(item) }
       else { odd.push(item) };

    })
    return odd.concat(even)
}


console.log(mergeTwoList(list_of_numbers))
