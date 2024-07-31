// 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


let n = prompt("input n : ")
let array = []
for (let i = 0 ; i < n ; i++){
    let number = parseInt(prompt('input your number : '))
    array.push(number)
}
for(let j = 0 ; j < array.length ; j++){
    for(let k = j+1 ; k < array.length ; k++ ){
        if(array[j] == array[k]){
            alert(`the Duplicate number is ${array[j]}`)
        }
    }
}