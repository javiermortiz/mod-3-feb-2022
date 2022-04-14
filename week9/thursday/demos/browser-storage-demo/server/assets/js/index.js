window.addEventListener("DOMContentLoaded", ev => {
    // Retrieve item in localStorage
    // const savedMode = localStorage.getItem("mode");
    const cardContent = JSON.parse(localStorage.getItem('cart'));
    for (let key in cardContent) {
        const li = `${key}: ${cardContent[key]}`;
        document.body.innerHTML += (li);
    }
    // Retrieve item in cookies
    const savedMode = document.cookie.split("=")[1];

    if (savedMode === "dark") {
        darkMode();
    }
    
    // if (endDate === true) localStorage.removeItem('cart');
    // If you are setting anything other than a string in localStorage
    // remember to stringify it and parse it
    // let savedCart = localStorage.getItem("cart");
    // if (savedCart) {
    //     console.log(savedCart);
    //     savedCart = JSON.parse(savedCart);
    //     console.log(savedCart);
    // }

    const modes = document.querySelector("#modes");
    modes.addEventListener("click", ev => {
        const selection = ev.target.id;
        if (selection === "light") {
            lightMode();
        } else if (selection === "dark") {
            darkMode();
        }
        // Set item in localStorage
        // console.log(selection);
        // localStorage.setItem("mode", ev.target.id);

        // If you are setting anything other than a string in localStorage
        // remember to stringify it and parse it
        // const cart = {apples: 5, oranges: 3, bananas:1000};
        // localStorage.setItem("cart", JSON.stringify(cart));

        // With cookies
        document.cookie = `mode=${selection}`;
    });
});

function lightMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "";
    h1.className = "";
    a.forEach(tag => tag.className = "");
    ul.className = "";
    button.className = "";
    li.forEach(tag => tag.className = "");
}

function darkMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "dark";
    h1.className = "dark";
    a.forEach(tag => tag.className = "dark");
    ul.className = "dark";
    button.className = "dark";
    li.forEach(tag => tag.className = "dark");
}