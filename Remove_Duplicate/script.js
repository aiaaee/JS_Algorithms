// method filter 

let arr = [1 , 2, 3 , 2 , 2 , 3 , 5, 4]
function removeDuplicates(data){
    return data.filter((value , index) => data.indexOf(value) == index)
}

console.log(removeDuplicates(arr))


// Sets

let arr2 = [2 , 3 , 2, 1 , 3 , 4 ,6 ,2 ,3, 1 ,6]
function removeDuplicates2(data2){
    return [... new Set(data2)]
}

console.log(removeDuplicates2(arr2))