function rectangle(width, height, color){

    color = color.slice(0,1).toUpperCase() + color.slice(1);

    let obj = {
        width, 
        height, 
        color,
        calcArea(){
            return this.width * this.height;
        }
    }

    return obj;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());