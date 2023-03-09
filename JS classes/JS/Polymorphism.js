/*
Polymorphism is the act of overriding methods within a derived class. Suppose you have a class called "CA" with a method "MA" on it - if you were to now create a child class of "CA" and then re-define the method "MA" on it, this would be polymorphism.

It is a commonly used technique when dealing with derived classes as in a lot of cases, the child class will be performing the same actions as its parent, but with a little extra.
*/

class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log("Generic Animal Sound!");
    }
}
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        // it call parent class and then method on it
        super.makeSound()
        console.log("Woof! Woof!");
    }
}
const animal1 = new Animal("Dom");
const animal2 = new Dog("johnny")
// animal1.makeSound();
animal2.makeSound();

