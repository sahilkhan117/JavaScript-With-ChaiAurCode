// Inheritence: Inheritence is a mechanism in which a new class is created from an existing class. The new class is called the derived class and the existing class is called the base class. The derived class inherits all the features from the base class and can have additional features of its own.

// Make a top parent level class
class User {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`Log Me ${this.username}`);
	}
}

// Make a child class of User
class Teacher extends User {
	constructor(username, email, password) {
		

		this.email = email;
		this.password = password;
	}

	addCourse() {
		console.log(`A new Course added by ${this.username}`);
	}
}
