// Static Methods and Properties
// Static properties: Static properties are shared among all instances of a class, while instance properties are unique to each instance of a class.
// Static methods: Static methods are called on the class itself, not on instances of the class. They are often used to create utility functions for an application.

// Static properties and methods are defined on the class itself. You can access them without instantiating the class. They are often used to create utility functions for an application.

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
}