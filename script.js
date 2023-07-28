const defaultMode = "black";
const canvas = document.querySelector('.canvas-container');
const gridSize = document.querySelector('.size-input');
const inputButton = document.querySelector('.input-button');
const rainbowButton = document.querySelector('.rainbow-mode');
let mouseDown = false;
let currentMode = defaultMode;

function setCurrentMode(newMode) {
    currentMode = newMode;
}


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
    if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else {
        e.target.style.backgroundColor = "#000";
    }
}

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
canvas.addEventListener('mouseover', changeColour);

rainbowButton.addEventListener('click', () => setCurrentMode("rainbow"));
inputButton.addEventListener('click', createGrid);

createGrid();