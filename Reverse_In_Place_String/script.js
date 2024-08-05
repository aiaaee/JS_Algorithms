function Reverse(text){
    text = text.toLocaleLowerCase()
    let str = ''
    let array = []
    for(let i = text.length -1 ; i >= 0 ; i--){
        str += text[i]
    }
    array = str.split(' ')
    console.log(array.reverse().join(' '))
}

Reverse("Hello My Name Is Amin")