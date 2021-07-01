function lyricsGenerator(arr){
    let lyric = [];
    let totalOnceFound = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===1){totalOnceFound+=1}
        if(arr[i]===0){lyric.push('Boom')}
        else if(arr[i]===1){lyric.push('Drop the base')}
        if(arr[i]===1 && totalOnceFound % 3===0){lyric.push('!!!Break the base!!!')}
    }
    return lyric.join(' ');
}
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))