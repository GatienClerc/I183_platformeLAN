"use strict";

const App = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            birthdate: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    methods: {
        async login() {
            const { password, confirmPassword } = this;

            if (password !== confirmPassword) {
                alert("Passwords don't match");
                return;
            }

            // Use bcryptjs global object
            const saltRounds = 10;
            const hashedPassword = await dcodeIO.bcrypt.hash(password, saltRounds);

            console.log("Passwords match");
            console.log("Hashed password:", hashedPassword);

            console.log({
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                birthdate: this.birthdate,
                email: this.email,
                password: hashedPassword
            });

            alert("Signup successful! Check console for hashed password.");
        }
    }
});

App.mount("#app");