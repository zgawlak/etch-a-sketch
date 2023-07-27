let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid() {
    const canvas = document.querySelector('.canvas-container');
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        canvas.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColour);
    }
}

function changeColour(e) {
    if (!mouseDown) return
    else e.target.style.backgroundColor = "#000";
}

const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('output');
slider.addEventListener('input', () => sliderOutput.value = slider.value);

createGrid();