const container = document.querySelector('.canvas');
const clearBtn = document.querySelector('#clear-btn');
const rangeSlider = document.querySelector('#range-slider');
const sliderLabel = document.querySelector('#slider-label');
const colourPicker = document.querySelectorAll('[data-colour]');

const DEFAULT_SIZE = 16;
const DEFAULT_COLOUR = "black"

let currentcolour = DEFAULT_COLOUR;

clearBtn.addEventListener('click', resetGrid);

colourPicker.forEach((colour) => {
    colour.style.backgroundColor = colour.getAttribute('data-colour');
    colour.addEventListener('click', () => {
        currentcolour = colour.getAttribute('data-colour');
    })
})

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
    e.target.style.backgroundColor = currentcolour;
};

function resetGrid() {
    size = rangeSlider.value;
    removeGrid();
    gridSetup(size);
};

function removeGrid() {
    let divs = document.querySelectorAll('.pixel');
    divs.forEach((div) => {
        div.remove();
    });
};

rangeSlider.oninput = function() {
    size = rangeSlider.value;
    sliderLabel.textContent = size + " x " + size;
}

rangeSlider.onmouseup = function() {
    size = rangeSlider.value;
    resetGrid();
}

window.onload = () => {
    gridSetup(DEFAULT_SIZE);
    sliderLabel.textContent = "16 x 16"
};
