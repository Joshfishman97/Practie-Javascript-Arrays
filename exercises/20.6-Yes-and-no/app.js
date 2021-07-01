let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let newArray = theBools.map(function(item,index,arr){
    if(item==0) return 'woko'
    else if (item==1) return 'wiki'
    
    

 return item;
}
);
console.log(newArray)


