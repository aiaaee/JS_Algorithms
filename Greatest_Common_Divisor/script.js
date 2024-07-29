let arr = []
let tmp = []
let numb1 = prompt("input number1 : ")
let numb2 = prompt("input number2 : ")
for (let i = 0 ; i < 10 ; i++){
    if(numb1 % i == 0 ){
        arr.push(i)
    }
    if(numb2 % i == 0 ){
        arr.push(i)
    }
}
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]){
            tmp.push(arr[i])
        }
    }
}
alert("the Greatest Common Divisor is " ,   Math.max(...tmp))