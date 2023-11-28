

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
     return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />`
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
baseShape.setColor("red"); 

const myTriangle = new Triangle ("yellow");
myTriangle.setColor("blue");


const mySquare = new Square ("purple");
mySquare.setColor("purple");


const myCircle = new Circle ("red");
myCircle.setColor("purple");


module.exports = {Shape, Square,Triangle,Circle}