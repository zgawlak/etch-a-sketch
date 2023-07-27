const container = document.querySelector('.container');

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', changeColour);
    }

    function changeColour(e) {
        if (!mouseDown) return
        else e.target.style.backgroundColor = "#000";
    }
}

createGrid();