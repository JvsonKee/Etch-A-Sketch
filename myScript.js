const container = document.querySelector(".container");
const clearBtn = document.querySelector('#clear-btn');

clearBtn.onClick = () => resetGrid();

function gridSetup(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
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

    clearBtn.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = "pink";
        });
    
        let size = parseInt(prompt("enter grid size: "));
        gridSetup(size);
    });
}


window.onload = () => {
    gridSetup(50);
};
