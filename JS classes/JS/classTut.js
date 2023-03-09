/*
Class --> Object

# Instances properties: what they have.

-name
-age
-height

# Instances Methods :What they do

-talk
-run
-jump

In JavaScript you can use the OOP (Object-Oriented-Programming) feature of "classes" to construct objects which are then useful resources for your script/application. By using the "class" keyword you are able to create a definition of a class and then from there you can instantiate it using the "new" keyword followed by the class name. You can think of a class as being a specified structure of what the eventual object HAS(property) and also what it DOES(methods).
*/

class Rectangle{
    constructor(width,height,color){
        console.log("The Rectangle is being created!");
        this.width = width;
        this.height =height;
        this.color =color
    }
    getArea(){
        return this.width *this.height
    }
    printDecription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
    }
}

const myRectangle = new Rectangle(3,5,"blue");
const myRectangle2 = new Rectangle(10,8,"red");
console.log(myRectangle);
console.log(myRectangle2);
console.log(myRectangle.getArea());
console.log(myRectangle2.getArea());
myRectangle.printDecription()
myRectangle2.printDecription()