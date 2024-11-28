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

    static createID(){ // static keyword make it unaccesable (cannot use by Objects)
        return '123'
    }
}

const hitesh = new User("sahil")
// console.log(hitesh.createID()) // cant acces because of 'static'

// INHERIT
class Teacher extends User{
    constructor(username, email){
        super(username)

        this.email = email
    }
}

const Iphone = new Teacher("iphone", "i@phone.com")
// console.log(Iphone.createID()); // also cannot accessd by inherit classes