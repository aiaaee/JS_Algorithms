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
