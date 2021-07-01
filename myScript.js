const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    
    div.classList.add('pixel');
    container.appendChild(div);
};

let pixel = document.querySelector(".pixel");

let className = document.querySelector('.pixel').className;
if (className == "pixel") {
    pixel.addEventListener("mouseover", function() {
        pixel.style.backgroundColor = "black";
    });
};

