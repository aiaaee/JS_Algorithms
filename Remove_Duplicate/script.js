let arr1 = []
for(let i = 0 ; i < 4 ; i++){
    let a = prompt("Write your number: ")
    arr1.push(a)
}
arr1 = arr1.map(item => parseInt(item))

for(let j = 0 ; j < arr1.length ; j++){
    for(let k = j+1 ; k < arr1.length ; k++ ){
        if(arr1[j] == arr1[k]){
            
        }
    }
}