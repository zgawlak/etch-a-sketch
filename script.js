const canvas = document.querySelector('.canvas-container');
const gridSize = document.querySelector('.size-input');
const inputButton = document.querySelector('.input-button');
let mouseDown = false;

function createGrid() {

    const canvasWidth = canvas.clientWidth;
    const squareSize = canvasWidth / gridSize.value;

    canvas.innerHTML = '';

    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";

        canvas.appendChild(gridSquare);
    }
}

function changeColour(e) {
    if (!mouseDown || !e.target.classList.contains('grid-square')) return;
    e.target.style.backgroundColor = "#000";
}

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
canvas.addEventListener('mouseover', changeColour);

inputButton.addEventListener('click', createGrid);

createGrid();