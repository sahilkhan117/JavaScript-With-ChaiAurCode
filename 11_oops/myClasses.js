// How to create classes

// ES6

class User {
	constructor(username) {
		this.username = username;
	}
    
    CallMe(){
        console.log(`My name is ${this.username}`);
    }
}

const chai = new User("Sahil")
