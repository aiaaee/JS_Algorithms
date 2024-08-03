let array1 = []
let array2 = []
function bubleSort(array1 , array2){
    let array = array1.concat(array2)
    let len = array.length ;
    for(let i = 0 ; i < len ; i++){
        for(let j = 0 ; j < len - 1 ; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}


let numbers1 = [12 , 10 , 15 , 11 , 13];
let numbers2 = [1, 22 , 42 , 4]
console.log(bubleSort(numbers1 , numbers2))

