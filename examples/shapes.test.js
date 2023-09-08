class Shape {
  constructor(color) {
    this.color = color;
  }
  render() {
  }
}
// Adding a class for Circle
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  render() {
    return `<circle cx="50" cy="50" r="70" fill="${this.color}" />`
  }
}
// Adding class for Square
class Square extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  render() {
    return `<rect x="90" y="70" width="120" height="120" fill="${this.color}" />`
  }
}
// Adding class for Triangle 
class Triangle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  render() {
  return `<polygon points="150,20 210,120 90,120" fill="${this.color}" />`
  }
}
// Test for cirlce 
describe('Circle class', () => {
  test('render() method should return the correct SVG string', () => {
    const circle = new Circle('blue', 40);
    const expectedSvg = '<circle cx="50" cy="50" r="70" fill="blue" />';
    expect(circle.render()).toBe(expectedSvg);
  });
// Test for Square
describe('Sqaure class', () => {
  test('render() method should return the correct SVG string', () => {
    const square = new Square('green', 40);
    const expectedSvg = '<rect x="90" y="70" width="120" height="120" fill="green" />';
    expect(square.render()).toBe(expectedSvg);
  })
});
describe('Triangle class', () => {
  test('render() method should return the correct SVG string', () =>{
    const triangle = new Triangle('red', 40);
    const expectedSvg = '<polygon points="150,20 210,120 90,120" fill="red" />';
    expect(triangle.render()).toBe(expectedSvg);
  })
})
});