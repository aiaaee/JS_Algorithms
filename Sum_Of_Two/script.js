
let arr = [1,2,3,4]
const numb = 9
for (let i = 0 ; i <= arr.length ; i++){
    for(let j = 0 ; j <= arr.length ; j++){
        if(arr[i] + arr[j] == numb ){
            console.log("true")
        }else{
            console.log("false")
        }
    }
        }



// function SumOfTwo(arr=[] , param) {
//     let counter= 0
//     for (let i = 0 ; i <= arr.length ; i++){
//         for(let j = 0 ; j <= arr.length ; j++){ 
//             arr[i] + arr[j] == param ? "Ok" : counter += 1
//         }
//     }
//     if(counter > 0){
//         console.log("It's true ")
//     }
//     else{
//         console.log("It is not true")
//     }
// }
        
// //         
// SumOfTwo([1 , 2 , 3] , )
