function pyramid(n){
    for(let i = 0; i<=n; i++){
        let spaces = " ".repeat(n-i)
        let stars = "* ".repeat(i)
        console.log(spaces+stars)
    }
    
}
pyramid(10)