let a = []
let b = []
function bubleSort(a , b){
    let array = a.concat(b)
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

