(function solve() {
    Array.prototype.last = function () {
        return this.push(this.pop());
    }
    Array.prototype.skip = function (n) {
        return this.filter((x, i, arr) => this[i] > n)
    }
    Array.prototype.take = function (n) {
        return this.filter((x, i, arr) => this[i] <= n)
    }
    Array.prototype.sum = function () {
        return this.reduce((a, x) => a + x, 0)
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()

