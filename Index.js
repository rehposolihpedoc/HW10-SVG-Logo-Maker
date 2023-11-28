// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs')
const {Shape, Square, Triangle, Circle} = require("./Lib/shapes");
function questions() {
    inquirer
 .prompt( [{
 type: 'input',
 name: 'text',
 message: 'Enter 3 charachters to display on your logo (No more than 3)',

},
{
    type: 'input',
    name: 'textColor',
    message: 'What is your text color? (Enter a color keyword or a hexadecimal number)',
   
   },
   {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape',
    choices: [
        "circle", 
        "triangle", 
        "square"
    ]
   
   },
   {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter your shape color (Enter a color keyword or a hexadecimal number)',
   
   },

])
.then((answers) => {
    if (answers.text.length > 3) {
        console.log("3 Character Maximum Input For First Question! Try again.");
        questions();
    } else if (answers.text.length < 4) {
      writeToFile("NewLogo.svg", answers);
    }
});
}
//ask the questions
//with those answers, decide which Shape to make (answers.shapeColor)

function writeToFile(fileName, answers) {
let svgUrl = "";
svgUrl = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
svgUrl += "<g>" ;
svgUrl += `${answers.shape}`;




let chooseShape;
if (answers.shape === "circle") {
    chooseShape = new Circle(answers.shapeColor);
}
if (answers.shape === "triangle") {
    chooseShape = new Triangle(answers.shapeColor);
} 
if (answers.shape === "square") {
    chooseShape = new Square(answers.shapeColor);
}
svgUrl += chooseShape.render()
svgUrl += `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text>`
svgUrl += "</g>";
svgUrl += "</svg>";

fs.writeFile(fileName, svgUrl, function(error) {
    if (error)
    return console.log(error) ; 
   console.log('generated logo.svg');} )
}



questions()




// const template = `<svg>${//shape.render()}</svg>`

// fs write file 