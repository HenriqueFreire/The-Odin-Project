const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Set container properties for the grid
    container.style.setProperty('--grid-size', size);

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });
        container.appendChild(square);
    }
}

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter number of squares per side (max 100):");
    newSize = parseInt(newSize);

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else if (newSize) {
        alert("Please enter a number between 1 and 100.");
    }
});

// Initial grid creation
createGrid(16);
