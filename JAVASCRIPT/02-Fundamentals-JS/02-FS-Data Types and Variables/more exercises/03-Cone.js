function cone(radius, height){
    let volume = 1/3*Math.PI*(radius**2)*height;
    
    let b = Math.PI * (radius**2)
    let l = Math.sqrt(height**2 + radius**2)
    let s = Math.PI * radius * l;
    let area = b + s;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}



cone(3,
    5)