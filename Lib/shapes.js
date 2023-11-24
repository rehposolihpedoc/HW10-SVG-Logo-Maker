

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

class Square extends Shape {
    constructor(color){
         super(color);
    }
    render(){
     return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
 }
const baseShape = new Shape ("blue");
console.log(baseShape);
baseShape.setColor("red"); 
console.log(baseShape);

const myTriangle = new Triangle ("yellow");
console.log(myTriangle);

module.exports = {Square,Triangle}