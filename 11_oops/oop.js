const user = {
    username: "sahil",
    loginCount: 8,
    isLoggedIn: true,
    greet: function () {
        console.log("hello", this.username);
    }
}

console.log(user);
console.log(user.greet());
