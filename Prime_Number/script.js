let number = prompt("import your number : ");
let is_prime = [];

if (number > 0) {
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            is_prime.push(i)
        }
    }
    is_prime.length > 2 ? alert("this is not prime") : alert("this is a prime ")
}
