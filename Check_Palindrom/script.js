
let str = 'JavaScript'.toLocaleLowerCase()
let array = str.split('')
let arr1 = []
let arr2 = []
for (let i = str.length - 1; i >= (str.length / 2); i--) {
    arr1.push(array[i])
}
for (let i = 0; i < (str.length / 2); i++) {
    arr2.push(array[i])
}

if (arr1.join('') == arr2.join('')) {
    console.log("It's a palindrom")
}
else {
    console.log("It's not a palindrom")
}
