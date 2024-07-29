let number = prompt("import your number : ");
let is_prime = [] ; 

if (number > 0 ){
   for (let i = 0 ; i <= number ; i++){
       if(number % i == 0 ){
           is_prime.push(i)
       }
   }
}
for (const element of is_prime)
   console.log(element)