window.onload = () => {
    document.getElementById("click-me").addEventListener("click", ev => {
        const ball = document.getElementById("ball");
        console.log(ball);
        ball.classList.add("red-ball");
        // ball.setAttribute('class', 'red-ball');

        const instructor = document.querySelector(".instructor");
        console.log(instructor);
        instructor.style.color = "red";
        // vs
        // instructor.style = "color: red;"

        const instructors = document.querySelectorAll(".instructor");
        console.log(instructors);
        instructors.forEach(instructor => {
            instructor.style.color = "red";
        });
        
        const url = 'https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg';
        const playground = document.getElementById("playground");
        playground.innerHTML = `
            <h2 class='red'>Hope you enjoyed the demo!</h2>
            <img 
                src=${url}
            >
        `;

        // const h2 = document.createElement('h2');
        // const title = document.createTextNode('Hope you enjoyed the demo!')
        // h2.appendChild(title);
        // h2.classList.add('red');
        // const img = document.createElement('img');
        // img.src = 'https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg';
        // playground.appendChild(h2);
        // playground.appendChild(img);
    });


}