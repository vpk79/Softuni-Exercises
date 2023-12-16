function extensibleObject() {
    function ExtendableObject(){}
        ExtendableObject.prototype.extend = function(template){
             Object.entries(template).forEach(([key,value]) => {
                if(value instanceof Function){
                    Object.getPrototypeOf(this)[key] = value;
                } else {
                    this[key] = value;
                }
             })
        }
    

    return new ExtendableObject();
}
const myObj = extensibleObject();
console.log(myObj);
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);