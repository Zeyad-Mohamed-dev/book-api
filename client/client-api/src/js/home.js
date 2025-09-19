import axios from "axios";
const loadingHeader = document.getElementById("load");
const container = document.getElementById("container");
const searchForm = document.getElementById("searchForm");
const headers = {
    Authorization: "Bearer" + localStorage.getItem("token")
};
const books = await axios.get("http://localhost:3000/books").then(res => res.data);

displayBooks(books);
function displayBooks(data) {
    data.forEach(item => {
        loadingHeader.style.display = "none";
        const div = document.createElement("div");
        const header = document.createElement("h2");
        const price = document.createElement("h3");
        const description = document.createElement("p");
        div.className = "card";
        header.textContent = item.title;
        price.textContent = item.price+"$";
        description.textContent = item.description;
        div.appendChild(header);
        div.appendChild(description);
        div.appendChild(price);
        container.appendChild(div);
    });
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchVal = document.getElementById("srch").value;
    console.log(searchVal);
})