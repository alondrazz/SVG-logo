class circleLogo {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    printMetaData() {
        console.log(`Logo text ${this.logoText} with ${this.textColor}`);
    }

}
var logo = new circleLogo('SVG','white','green')
console.log(logo.printMetaData())

// Added sqaure class and usage example
class squareLogo {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    printMetaData() {
        console.log(`Logo text ${this.logoText} with ${this.textColor}`)
    }
}
var logo = new squareLogo('SVG', 'white','green')
console.log(logo.printMetaData())

// Added triangle class and usage example
class triangleLogo {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    printMetaData() {
        console.log(`Logo text ${this.logoText} with ${this.textColor}`)
    }
}
var logo = new triangleLogo('SVG', 'white','green')
console.log(logo.printMetaData())