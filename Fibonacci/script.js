// Computing Fibonacci 

function fibonacci(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(12))

// ----------------------------------------

//fibonacci Series 

let n = 5;
let tmp;
let num1 = 0;
let num2 = 1;
for (let i = 0; i < n; i++) {
    tmp = num1 + num2
    num1 = num2;
    num2 = tmp;
    tmp = num1;
    console.log(tmp)

}
