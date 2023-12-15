function echoTypes(param){
    let buffer = typeof(param);

    if(buffer === "string" || buffer === "number"){
        console.log(buffer);
        console.log(param);
    } else {
        console.log(buffer);
        console.log("Parameter is not suitable for printing");
    }
}



echoTypes('Hello, JavaScript!')
echoTypes(18)
echoTypes(null)