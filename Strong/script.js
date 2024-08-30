// A strong number is such that the sum of it's factorial is the number itself

let number = prompt('Enter Any Number to Check Strong Number : ') 
let Main_Number = number 
let sum = 0 
while (number > 0 ){
  let lastDigit = number % 10 
  fact = 1 
  for(let i = 0 ; i < lastDigit + 1 ; i++){
    fact *= i 
  }
  sum += fact
  number = number // 10 
}
if(number == Main_Number){
  alert(Main_Number , 'is strong number ')
}
