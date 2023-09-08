const fs = require('fs');
const inquirer = require('inquirer');

console.log("it works");

// Adding questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter text you want displayed no more than 3 characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What would you like the text color to be. Enter color keyword or a hexadecimal number.',
        name: 'textColor',
    },
    {
        type: 'checkbox',
        message: 'Select a shape you want your icon to be',
        name: 'shapes',
        choices: [
            'circle',
            'square',
            'triangle',
        ]
    },
    {
        type: 'input',
        message: 'What would you like the background color to be. Enter color keywords or a hexadecimal number.',
        name: 'backgroundColor',
    }
];

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log('User answers:', answers);

        // Generate SVG based on user input
        const svgLogo = generateSVG(answers);
        writeToFile('logo.svg', svgLogo);
    })
}

function generateSVG(answers) {
    // Define the SVG based on user input
    const { text, textColor, shapes, backgroundColor } = answers;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    if (shapes.includes('circle')) {
        // Add the circle shape
        svg += `<circle cx="150" cy="100" r="70" fill="${backgroundColor}" />`;
        svg += `<text x="150" y="100" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
        // Add the square shape
    if (shapes.includes('square')) {
        svg += `<rect x="90" y="70" width="120" height="120" fill="${backgroundColor}" />`;
        svg += `<text x="150" y="140" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
        // Add the traingle shape
    if (shapes.includes('triangle')) {
        svg += `<polygon points="150,20 210,120 90,120" fill="${backgroundColor}" />`;
        svg += `<text x="150" y="90" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    svg += `</svg>`;
    
    return svg;
}
// Add function to make a logo.svg after generating a logo
function writeToFile(fileLogo, data) {
    fs.writeFile(fileLogo, data, (err) => {
        if (err) {
            console.log('Errors writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

init();
