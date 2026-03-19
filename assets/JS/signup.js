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

            console.log("Passwords match");
            console.log("Hashed password:", hashedPassword);

            fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    birthdate: this.birthdate,
                    email: this.email,
                    password: this.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    window.location.href = "http://localhost:3000/login";
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(error)
                });

        }
    }
});

App.mount("#app");