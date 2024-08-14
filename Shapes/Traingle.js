function Traingle(n){
    for (let i = 0 ; i <= n ; i++){
        let strike = ' '.repeat(n)
        let stargs = '* '.repeat(i);
        console.log(strike + stargs)
    }
}

Traingle(10)

console.log('               ')

function Traingle2(n){
    for(let i = 0 ; i < n ; i++){
        let strike = ' '.repeat(n);
        let stargs = '* '.repeat(n-i) ;
        console.log(strike + stargs);
    }
}
Traingle2(10)

console.log("                   ")

function Traingle3(n){
    for (let i = 0 ; i <= n ; i++){
        let strike = ' '.repeat(n-i)
        let stargs = '* '.repeat(i);
        console.log(strike + stargs)
    }
}

Traingle(10)

console.log("                   ")

function Traingle4(n){
    for (let i = 0 ; i <= n ; i++){
        let strike = ' '.repeat(i)
        let stargs = '* '.repeat(n-i);
        console.log(strike + stargs)
    }
}

Traingle(10)
