// We're able to using arguments.length to compute lengths of Average parameter . 

function Average(a , b , c = 0 ){
    let d = a + b + c ; 
    console.log(d / arguments.length)
}
Average(1 , 2 , 3 )
