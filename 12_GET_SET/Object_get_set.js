const User = {
	_email: "msmsms",
	_password: "qwe",

    get email() {
		return this._email.toUpperCase();
	},
	set email(val) {
		this._email = val;
	},
}