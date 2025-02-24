// quest01
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(this.width * this.height);
    }

    perimeter() {
        console.log(2 * (this.width + this.height));
    }
}

// quest02
class Square extends Rectangle {
    constructor(width, height) {
        super(width, height);
    }

    isSquare() {
        return this.width === this.height;
    }
}