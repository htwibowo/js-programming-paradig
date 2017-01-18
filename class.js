class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x,y);
    this.color = color;
  }
  static staticMethod() {
    return this.color;
  }
  toString() {
    return super.toString() + ' in this ' + this.color;
  }
  get varX() {
    return 'contents of varX';
  }
  set varY(value) {
    console.log("Just to get input of Y, then process the input: " + value);
  }
}

console.log("type of Point: " + typeof Point);
console.log("type of ColorPoint: " + typeof ColorPoint);
console.log("type of Point.toString: " + typeof ColorPoint.toString);
console.log("type of Point.prototype.toString: " + typeof ColorPoint.prototype.toString);

let cp = new ColorPoint(25, 8, 'green');

console.log("\n ColorPoint(25,8,'green'):" + cp.toString());
console.log("varX = " + cp.varX);
console.log("Type of varX = " + typeof cp.varX);
console.log("Fill Y with 'abc'")
cp.varY = "abc";
console.log("\n type of ColorPoint.staticMethod:" + typeof ColorPoint.staticMethod());
//console.log("\n ColorPoint.staticMethod:" + cp.staticMethod());

console.log(cp.color);

console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);
