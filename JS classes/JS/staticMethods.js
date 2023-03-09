/*
In JavaScript you can define "static methods" or "static functions" which are functions that are defined on a class but do not actually require an instance of that class to be created in order to be used.

In most cases, static methods are "helper methods" or used for creating instances of that class.

In this video I take you through a simple example of how you can define static methods on a class - we create a method used to compare two instances to give a result.

*/

class Square{
constructor(width){
    this.width = width;
    this.height = width
}
static equal(a,b){
    return a.width *a.height == b.height *b.width
}
static isValidDimensions(width,height){
    return width == height
}
}
const sqrt1 = new Square(8);
const sqrt2 = new Square(8);
console.log(sqrt2);
console.log(Square.equal(sqrt1,sqrt2));
console.log(Square.isValidDimensions(sqrt1.width,sqrt1.height));