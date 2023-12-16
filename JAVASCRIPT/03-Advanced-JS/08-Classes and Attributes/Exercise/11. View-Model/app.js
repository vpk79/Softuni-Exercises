

class Textbox {
    constructor(selector, regex) {
        this.value
        this._elements = document.querySelectorAll(selector)
        this._invalidSymbols = regex
    }
    get value() {
        return this._value
    }
    set value(element) {
        this._value = element
        for (let element of this._elements) {
            element.value = this.value
        }
    }
    get elements() {
        return this._elements
    }
    isValid() {
        for (let element of this._elements) {
            if (element.value.match(this._invalidSymbols)) {
                return false;
            }
        }
        return true
    }
}




// class Textbox {
//     constructor(selector, regex) {
//         this.selector = selector;
//         this._invalidSymbols = regex;
//         this._elements = this.elements;
//         this._value = '';

//         for (let el of this._elements) {
//             el.addEventListener('input', () => {
//                 this.value = el.value;
//             });
//         }
//     }

//     get elements() {
//         return document.querySelectorAll(this.selector);
//     }

//     get value() {
//         return this._value;
//     }

//     set value(newValue) {
//         this._value = newValue;
//         for (let el of this._elements) {
//             el.value = newValue;
//         }
//     }

//     isValid() {
//         for (let el of this._elements) {
//             if (this._invalidSymbols.test(el.value)) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
// let inputs = document.getElementsByClassName('textbox');

// for (let input of inputs) {
//     input.addEventListener('input', function () {
//         console.log(textbox.value);
//     });
// }

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
