function User(email, password) {
    this._email = email;
	this._password = password;

}

const chai = new User("sahil@ma.com", "asd")
console.log(chai.email);
