// Import the Triangle class from the shapes module
const { Triangle } = require('./shapes.js');

// Create a new Triangle instance
const shape = new Triangle();

// Set the color of the shape
shape.setColor("blue");

// Test the rendering functionality
test('Triangle rendering', () => {
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});


