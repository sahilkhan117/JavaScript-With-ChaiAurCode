function User(email, password) {
    this._email = email;
	this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){return this._email.toUpperCase()},
        set: function(val){this._email = val}
    })

}

const chai = new User("sahil@ma.com", "asd")
console.log(chai.email);
