function SumOfTwo(arr=[] , param) {
    let counter= 0
    for (let i = 0 ; i <= arr.length ; i++){
        for(let j = 0 ; j <= arr.length ; j++){ 
            arr[i] + arr[j] == param ? counter += 1 : ''
        }
    }
    console.log("The Sum of Count Number is " , counter)
    if(counter > 0){
        console.log("It's true ")
    }
    else{
        console.log("It is not true")
    }
}
        
SumOfTwo([1 , 2 , 3] , 14)
