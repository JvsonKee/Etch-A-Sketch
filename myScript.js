const container = document.querySelector(".container");
const clearBtn = document.querySelector('#clear-btn');
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

clearBtn.addEventListener('click', resetGrid);

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function gridSetup(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    setCurrentSize(size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add("pixel");
        container.appendChild(div);

        div.addEventListener('mouseover', changeColour);
    };
};


function changeColour(e) {
    e.target.style.backgroundColor = "black";
};

function resetGrid() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "pink";
    });
    let size = parseInt(prompt("enter grid size: "));
        gridSetup(size);
};

window.onload = () => {
    gridSetup(DEFAULT_SIZE);
};