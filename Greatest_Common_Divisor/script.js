// Finding Greatest Common Devisor
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


console.log('------------------------------------')

// another Method 

let a = prompt("import number 1 : ")
let b = prompt("import number 2 : ")
function GCD(a , b){
    if (b == 0 ){
        return a 
    }
    else{
        return GCD(b, a % b)
    }
}
let c = GCD(7 , 21)

alert("The Greatest Common Divisor is " , c)