import instructors from "./seedData.js";
import message from "./secondImport.js";
console.log(message);
// const instructors = require('./seedData.js');

const helloInstructors = instructors.map(instructor => `<h2>Hello ${instructor}</h2>`);
document.getElementById("playground").innerHTML = helloInstructors.join("");

document.getElementById("click-me").addEventListener("click", ev => {
    // manipulating the browser
    // alert("About to open a new window");
    // open("https://www.appacademy.io/");

    // manipulating the document
    window.document.getElementById("playground").style.color = "red";
});