function Derviative(f , x , h=1e-5){
    return (f(x + h) - f(x)) / h
}

function count_variables(func_str){
    let variables = new Set();
    for (part in func_str.replace(' ' , '').replace('(' , '').replace(')' , '').split('+')){
        for(subpart in part.split('-')){
            for (term in subpart.split('*')){
                for (factor in term.split('/')){
                    if (factor.toString().length > 0 && !factor.isInteger()){
                        variables.add(factor)
                    }
                }
            }
        }
    }
    return variables.length
}


function Derivate_example_function(x){
    return 3*(Math.sin(x ** 2 )) / Math.cos(x) 
}

let x_point = parseInt(prompt("import x : ")) ; 
deriv_at_x = Derviative(Derivate_example_function , x_point)

console.log(`The derivative of the function at x=${x_point} is approximately ${deriv_at_x}`)