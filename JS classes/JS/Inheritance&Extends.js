/*

By using the "extends" keyword with your JavaScript classes you are able to create inheritance which is where you have a child class that inherits the instance properties and methods of its parent class.

You'd typically use a feature like this on the server-side with NodeJS as this can be considered to be a complex design - although classes can be used to represent similar visual components on the front-end.

In this video I take you through a simple example of how you can make use of the extends keyword to achieve inheritance - you'll see how we create a "child" version of a Person class, a Programmer.  programmer has all the features of a person but with a little but extra!
 */

// parent and child class

class Person{
    constructor(name,age){
        this.name =name;
        this.age =age
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person{
constructor(name,age,yearsOfExp){
super(name,age)
// custom Behaviour
this.yearsOfExp = yearsOfExp
}
code(){
    if(this.name == "sufiyan"){
        console.log(`${this.name} is not doing coding it's giving the back exam 5 sem`);
    }else{

        console.log(`${this.name} is coding`);
    }
}
}

// const person1 = new Person("asif",23)
// const programmer1 = new Programmer("sarfraj",23,1)
// console.log(person1);
// console.log(programmer1);
// programmer1.describe()

const programmerArr = [
    new Programmer("asif",30,-1),
    new Programmer("sarfraj",23,10),
    new Programmer("sufiyan",Infinity,"Impossible")
]
console.log(programmerArr);

function developerSoftware(){
    // Developer software
    for(let Programmer of programmerArr){
        Programmer.code()
    }
}
developerSoftware()