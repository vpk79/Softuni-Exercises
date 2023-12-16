function solve(string){
    console.log(string.match(/[A-Za-z0-9]+/g).join(", ").toUpperCase());
}


solve('Hi, how are you?')
solve('hello')