/*
--> In JavaScript, you can use "getters" and "setters" within your class definitions to bind a function to a property. Both "getters" and "setters" behave like regular properties so you are able to get and set instance properties but you are able to define your own function to modify the behaviour.

--> They can be useful when you have a class with multiple instance properties and you'd like to compute/set a value while still maintaining loose coupling.

--> In this video I show you a few simple examples of how you can implement your own "getters" and "setters" on your user-defined classes.

*/
//use getter in class it auto modfiy method into property.
class Square{
    constructor(width){
        this.width =width
        this.height = width
        this.countRequestForArea =0
    }
    // behave as method
    get area(){
        this.countRequestForArea++
        return this.width * this.height;
    }
    set area(a){
        this.width = Math.sqrt(a);
        this.height = this.width;
    }
}

const sqrt1 = new Square(4);
// console.log(sqrt1);
sqrt1.area = 25
console.log(sqrt1.area);
console.log(sqrt1.area);
console.log(sqrt1.area);
console.log(sqrt1.area);
console.log(sqrt1.countRequestForArea);

