function solve() {


    class Figure {
        constructor() {
            this.units = 'cm';
            this.multiplier = 1;
        }

        get area() {

        }

        convertUnits(value) {
            if (value === 'mm') {
                this.multiplier = 10;
            } else if (value === 'm') {
                this.multiplier = 0.1;
            } else {
                this.multiplier = 1;
            }

            return this.multiplier;
        }

        changeUnits(value) {
            this.units = value;
            this.convertUnits(value);
        }

        toString() {
            return `Figures units: ${this.units}`
        }

    }

    class Circle extends Figure {
        constructor(value) {
            super();
            this.radius = value;
        }

        get area() {
            return Math.PI * (this.radius * this.multiplier) * (this.radius * this.multiplier);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * this.multiplier}`
        }
    }


    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
            this.changeUnits(units);
        }

        get area() {
            return (this.width * this.multiplier) * (this.height * this.multiplier);

        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * this.multiplier}, height: ${this.height * this.multiplier}`

        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }

}