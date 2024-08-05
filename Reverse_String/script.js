function Reverse(string){ 
    string = string.toLowerCase()
    let array = string.split('')
    array = array.reverse().join('')

    console.log(array)
}

Reverse("amin")