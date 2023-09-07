class Shape {
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color=color
    }
}
//Circle class
class Circle extends Shape {
    render(){
        return`<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
}
var shape = new Circle 
shape.setColor('pink')
console.log(shape.render())
{
//Sqare class
class Sqaure extends Shape {
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`
    }
}
var shape = new Sqaure
shape.setColor('purple')
console.log(shape.render())
}
//Traingle class 
class Traingle extends Shape {
    render() {
        return `<svg height="210" width="400">
        <path d="M150 0 L75 200 L225 200 Z" fill="${this.color}" />`
    }
}
var shape = new Traingle 
shape.setColor('blue')
console.log(shape.render())
