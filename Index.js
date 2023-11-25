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
const {Square,Triangle,Circle} = require("./Lib/shapes")
const questions = [{
 type: 'input',
 name: 'text',
 message: 'Enter text',

},
{
    type: 'input',
    name: 'textColor',
    message: 'What is your text color?',
   
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
    message: 'Enter your shape color',
   
   },

]

//ask the questions
//with those answers, decide which Shape to make (answers.shapeColor)

// function writeToFile(fileName, answers) {
//     const content = generateLogo(answers);
//     fs.writeFile(fileName, content, function(error) {
//      if (error)
//      return console.log(error);
//     }
//     console.log('generated logo.svg')
//     )
// } 





// const template = `<svg>${//shape.render()}</svg>`

// fs write file 