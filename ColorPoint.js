var Point = require('./Point')

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

module.exports = ColorPoint
