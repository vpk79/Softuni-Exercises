function cats(arr){
    class Cat{

        constructor(name, ages){
            this.name = name;
            this.age = ages;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let i = 0; i < arr.length; i++){
        let[catName, age] = arr[i].split(" ");
        let newCat = new Cat(catName, age);
        newCat.meow()
    }
}



cats(['Mellow 2', 'Tom 5'])