class Square {
    constructor(public width: number) {}
  }
  class Rectangle extends Square {
    constructor(public width: number, public height: number) {
      super(width);
    }
  }
  type Shape = Square | Rectangle; // Rectangle은 타입으로 참조 됨
  
  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) { // 값으로 참조 됨
      shape;  // Type is Rectangle
      return shape.width * shape.height;
    } else {
      shape;  // Type is Square
      return shape.width * shape.width;  // OK
    }
  }