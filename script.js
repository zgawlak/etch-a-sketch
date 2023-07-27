const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () =>
        gridSquare.style.backgroundColor = "red");
    }
}

createGrid();