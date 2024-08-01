let array1 = []; 
let array2 = [];
function BubbleSort(array1 , array2){
    let array = array1.concat(array2)
    let len = array.length; 
    for(let i = 0 ; i < len ; i++){
        for(let j = 0 ; j < len - 1 ; j++){
            if(array[j] > array[j+1]){
                let tmp = array[j] ;
                array[j] = array[j+1] ;
                array[j+1] = array[j] ;
            }
        }
    }
    return array
}
let number1 = [1 , 11 , 22 , 32];
let number2 = [1,  21 , 33 , 54];

console.log(BubbleSort(number1 , number2))

