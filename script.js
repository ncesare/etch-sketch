// Initialize variables and make the first etch-n-sketch grid of 16x16

const sketchGrid = document.querySelector('.sketch-grid');
const gridSlider = document.querySelector('#gridSlider');
const gridSizeDisplay = document.querySelector('#gridSizeDisplay');
let gridSize = gridSlider.value;
gridSizeDisplay.textContent = `${gridSize} by ${gridSize}`;
makeGrid(16);

// Whenever the user changes the value on the slider, make a new grid accordingly.

gridSlider.oninput = function() {
    gridSize = gridSlider.value;
    gridSizeDisplay.textContent = `${gridSize} by ${gridSize}`;
    makeGrid(gridSize)
}

function makeGrid(gridSize) {
    sketchGrid.innerHTML = ''; // Delete the previous grid before making a new one.

    // Make gridSize number of rows.

    for (let n = 0; n < gridSize; n++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchGrid.appendChild(row);

        // Populate each row with gridSize number of boxes.

        for (let i = 0; i < gridSize; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = (400 / gridSize) + 'px';
            box.style.height = (400/ gridSize) + 'px';
            row.appendChild(box);
            
            // Add appropriate event listener to each box as it's created.

            box.addEventListener('mouseover', () => box.style.backgroundColor = 'blue');
        }
    }
}

// Allow the user to change background-color on grid boxes by clicking and hovering.