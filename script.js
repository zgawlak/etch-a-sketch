const defaultMode = "black";

const canvas = document.querySelector('.canvas-container');
const gridSize = document.querySelector('.size-input');
const inputButton = document.querySelector('.input-button');
const rainbowButton = document.querySelector('.rainbow-mode');
const blackButton = document.querySelector('.black-mode');
const clearCanvasButton = document.querySelector('.clear-canvas');

let mouseDown = false;
let currentMode = defaultMode;

function setCurrentMode(newMode) {
    setActiveButton(newMode);
    currentMode = newMode;
}

function createGrid() {
    const canvasWidth = canvas.clientWidth;
    const squareSize = canvasWidth / gridSize.value;

    canvas.innerHTML = '';

    if (gridSize.value > 100) return window.alert('Number too high!');
    if (gridSize.value < 1) return window.alert('Number too low!');

    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";
        gridSquare.setAttribute('data-darkness', 0);
        canvas.appendChild(gridSquare);
    }
}

function changeColour(e) {
    if (!mouseDown || !e.target.classList.contains('grid-square')) return; // Mouseover effect only on grid squares, not canvas
    if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else if (currentMode === 'black') {
        const currentDarkness = parseInt(e.target.getAttribute('data-darkness'), 10);
        if (currentDarkness < 10) {
            const newDarkness = currentDarkness + 1;
            e.target.setAttribute('data-darkness', newDarkness);
            const darknessPercentage = newDarkness * 10;
            const newColorValue = 255 - Math.round((darknessPercentage / 100) * 255);
            e.target.style.backgroundColor = `rgb(${newColorValue}, ${newColorValue}, ${newColorValue})`;
        }
    }
}

function clearCanvas() {
    const gridSquares = document.querySelectorAll('.grid-square');
    for (i = 0; i < gridSquares.length; ++i) {
        gridSquares[i].setAttribute('data-darkness', 0);
        gridSquares[i].style.backgroundColor = "";
    }
}

function setActiveButton(newMode) {
    if (currentMode === "rainbow"){
        rainbowButton.classList.remove("active");
    }
    else if (currentMode === "black"){
        blackButton.classList.remove("active");
    }

    if (newMode === "rainbow") {
        rainbowButton.classList.add("active");
    }
    else if (newMode === "black"){
        blackButton.classList.add("active");
    }
}

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
canvas.addEventListener('mouseover', changeColour);

rainbowButton.addEventListener('click', () => setCurrentMode("rainbow"));
blackButton.addEventListener('click', () => setCurrentMode("black"));
inputButton.addEventListener('click', createGrid);
clearCanvasButton.addEventListener('click', clearCanvas);

createGrid();