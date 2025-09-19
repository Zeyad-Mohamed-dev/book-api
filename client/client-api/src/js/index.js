import axios from "axios";
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const form = document.getElementById("register");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    

    if(username.value.trim() != "" || password.value.trim() != "" || email.value.trim() != "") {
        console.log(email.value);
        console.log(password.value);
        console.log(username.value);
        axios.post("http://localhost:3000/user/register", {
            name: username.value,
            email: email.value,
            password: password.value,
            role: "user"
        }).then((res) => {
            if(res.status === 201) {
                alert("User registered successfully");
                window.location.href = "./src/login.html";
            } 
        });
    }

    else {
        alert("Please enter valid data");
    }
    
})

