function pointOnRectangle(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    if (((x == x1 || x == x2) && (y >= y1 && y <= y2)) || ((y == y1 || y == y2) && (x >= x1 && x <= x2))){
        console.log("Border");
    }   else if ((x != x1 && x != x2) || (y != y1 && y != y2)) {
        console.log("Inside / Outside");
    }


}




// pointOnRectangle(["2", "-3", "12", "3", "12","-1"])
// pointOnRectangle(["2", "-3", "12", "3", "-8", "-1"])
// pointOnRectangle(["2", "-3", "12", "3", "80", "-1"])
// pointOnRectangle(["2", "-3", "12", "3", "2", "3"])
// pointOnRectangle(["2", "-3", "12", "3", "1", "3"])
