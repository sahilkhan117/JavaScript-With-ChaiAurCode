const User = {
	_email: "msmsms",
	_password: "qwe",

    get email() {
		return this._email.toUpperCase();
	},
	set email(val) {
		this._email = val;
	},

    // Whenever you try to access the password property, it will return the password in uppercase.
    get password() {
		return this._password.toUpperCase();
	},
	set password(val) {
		this._password = val;
	},
}

const tea = Object.create(User);
console.log(tea.email);