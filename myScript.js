const container = document.querySelector(".container");
const clearBtn = document.querySelector('#clear-btn');
const DEFAULT_SIZE = 16;

clearBtn.addEventListener('click', resetGrid);

function gridSetup(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add("pixel");
        container.append(div);
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
    while (size > 64 || size < 1) {
        size = parseInt(prompt("enter grid size: "));
    };
    removeGrid();
    gridSetup(size);
};

function removeGrid() {
    let divs = document.querySelectorAll('.pixel');
    divs.forEach((div) => {
        div.remove();
    });
};

window.onload = () => {
    gridSetup(DEFAULT_SIZE);
};
