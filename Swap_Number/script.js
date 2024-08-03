let x ; 
let y ; 
function Swap_Number(x , y){
    x = x + y 
    y = x - y
    x = x - y 

    console.log(x , y)
}
Swap_Number(10 , 20 )

// ------------------------------------

let a ;
let b ; 

function Swap_Number2(a , b){
    a = a && b 
    b = a && b
    a = a && b 

    console.log(a , b)
}

Swap_Number2(10 , 20) ; 