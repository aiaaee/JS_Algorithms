function Square(n , width){
    for(let i = 0 ; i < n ; i++){
        let str = '* '.repeat(n + width)
        let idx = ' '.repeat(n)
        console.log(idx + str) 
    }
}

Square(10 , 3)

 
