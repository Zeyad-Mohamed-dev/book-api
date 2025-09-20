import axios from "axios";
const form = document.getElementById("login");

form.addEventListener("submit" , async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email != "" || password != "") {
        const res = await axios.post("http://localhost:3000/user/signin", {
            email: email,
            password: password
        })

        if(res.status === 200) {
            localStorage.setItem("token", res.data.token);
            window.location.href = "../home.html";
        }

    }

})