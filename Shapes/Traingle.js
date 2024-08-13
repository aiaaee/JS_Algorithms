function Traingle(n){
    for (let i = 0 ; i < n ; i++){
        let strike = ' '.repeat(n)
        let stargs = '* '.repeat(i);
        console.log(strike + stargs)
    }
}

Traingle(10)


