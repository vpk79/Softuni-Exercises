(function solve() {

    String.prototype.ensureStart = function (str) {
        return !this.startsWith(str) ? str + this.toString() : this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        return !this.endsWith(str) ? this.toString() + str : this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n <= 3) { return '.'.repeat(n) }
        if (this.toString().length <= n) { return this.toString(); }

        let lastIndex = this.toString().slice(0, n - 2).lastIndexOf(' ');
        if (lastIndex !== -1) {
            return this.toString().slice(0, lastIndex) + '...'
        } else {
            return this.toString().slice(0, n - 3) + '...'
        }
    };

    String.format = function (string, ...params) {
        let str = string;
        params.forEach((param, i) => str = str.replace(`{${i}}`, param));
        return str;
    }


    // let str = 'my string';
    // str = str.ensureStart('my');
    // console.log(str);
    // str = str.ensureStart('hello ');
    // // console.log(str);
    // // str = '';
    // // console.log(str.isEmpty());
    // // str = str.ensureEnd('my');
    // // console.log(str);
    // // str = str.ensureEnd('hello ');
    // // console.log(str);

    // str = str.truncate(16);
    // console.log(str);
    // str = str.truncate(14);
    // console.log(str);
    // str = str.truncate(8);
    // console.log(str);
    // str = str.truncate(4);
    // console.log(str);
    // str = str.truncate(2);
    // console.log(str);
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    // console.log(str);
    // str = String.format('jumps {0} {1}',
    //     'dog');
    // console.log(str);
})()