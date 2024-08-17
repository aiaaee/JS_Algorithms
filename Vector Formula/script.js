// Magnitude of a Vector formula 

function VectorA(x , y , z ) {
    let x = x ** 2 
    let y = y ** 2 
    let z = z ** 2
    // ---------------------------------------------
    let A = Math.sqrt((x ** 2) + (y ** 2 ) + (z ** 2))
    return A 
}

VectorA(10 , 20 , 30 )
