let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

const slider = document.querySelector('.slider');

function createGrid() {
    const canvas = document.querySelector('.canvas-container');
    const canvasWidth = canvas.clientWidth;
    const squareSize = canvasWidth / slider.value;

    canvas.innerHTML = '';

    for (let i = 0; i < (slider.value * slider.value); i++) {
        const gridSquare = document.createElement('div');

        gridSquare.style.width = squareSize + "px";
        gridSquare.style.height = squareSize + "px";

        canvas.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColour);
    }
}

function changeColour(e) {
    if (!mouseDown) return
    else e.target.style.backgroundColor = "#000";
}

const sliderOutput = document.querySelector('output');
slider.addEventListener('input', () => {
    sliderOutput.value = slider.value;
    createGrid();
});

createGrid();