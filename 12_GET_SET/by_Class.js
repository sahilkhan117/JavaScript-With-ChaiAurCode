// 🆕🆕🆕
// In ES6 2022 js Entroduce # to secure any property by default.

class User {
    constructor(email, password) {
		this._email = email;
		this._password = password;
	}
	
	get email() {
		return this._email.toUpperCase();
	}
	set email(val) {
		this._email = val + "ok";
	}
	get password() {
		return this._password.toUpperCase();
	}
	set password(val) {
		this._password = val + "ok";
	}
}

const chai = new User("sahil@ms.com", "asd");
console.log(chai.password);
chai.password = "msa";
console.log(chai.password);