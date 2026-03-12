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
            if (!this.firstName || !this.lastName || !this.username || !this.birthdate || !this.email || !this.password || !this.confirmPassword) {
                alert("Missing fields");
                return;
            }

            if (this.password !== this.confirmPassword) {
                alert("Passwords don't match");
                return;
            }

            // Use bcryptjs global object
            const saltRounds = 10;
            const hashedPassword = await dcodeIO.bcrypt.hash(this.password, saltRounds);

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

            window.location.href = "http://localhost:3000/login";
        }
    }
});

App.mount("#app");