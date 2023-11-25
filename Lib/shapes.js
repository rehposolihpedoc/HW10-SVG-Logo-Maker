

class Shape {
    constructor(color){
        this.color = color,
        this.outline = null 
    }
    setColor(newColor){
        this.color = newColor
    }
}

class Triangle extends Shape {
   constructor(color){
        super(color);
   }
   render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
   }
}
class Circle extends Shape {
    constructor(color){
         super(color);
    }
    render(){
     return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
 }
class Square extends Shape {
    constructor(color){
         super(color);
    }
    render(){
     return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
 }
const baseShape = new Shape ("blue");
console.log(baseShape);
baseShape.setColor("red"); 
console.log(baseShape);

const myTriangle = new Triangle ("yellow");
console.log(myTriangle);

const mySquare = new Square ("purple");
console.log(mySquare);

const myCircle = new Circle ("red");
console.log(myCircle);

module.exports = {Square,Triangle,Circle}