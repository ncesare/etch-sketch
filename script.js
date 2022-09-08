// Initialize variables and make the first etch-n-sketch grid of 16x16

const clearButton = document.querySelector('#clear');
const sketchGrid = document.querySelector('.sketch-grid');
const gridSlider = document.querySelector('#gridSlider');
const gridSizeDisplay = document.querySelector('#gridSizeDisplay');
let gridSize = gridSlider.value;
gridSizeDisplay.textContent = `${gridSize} by ${gridSize}`;
makeGrid(16);

clearButton.addEventListener('click', clearGrid);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Whenever the user changes the value on the slider, make a new grid accordingly.

gridSlider.oninput = function() {
    gridSize = gridSlider.value;
    gridSizeDisplay.textContent = `${gridSize} by ${gridSize}`;
    makeGrid(gridSize)
}

function makeGrid(gridSize) {
    sketchGrid.innerHTML = ''; // Delete the previous grid before making a new one.

    // Populate the grid with gridSize**2 number of boxes.

    for (let i = 0; i < gridSize**2; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = (400 / gridSize) + 'px';
        box.style.height = (400 / gridSize) + 'px';
        sketchGrid.appendChild(box);
            
        // Add appropriate event listener to each box as it's created.

        box.addEventListener('mouseover', (event) => drawInBox(event, box));
        box.addEventListener('mousedown', (event) => drawInBox(event, box));
    }
}

// Allow the user to change background-color on grid boxes by clicking and hovering.

function drawInBox(event, box) {
    if (event.type === 'mouseover' && mouseDown === true) {
        console.log('mouseover');
        box.style.backgroundColor = 'rgb(28, 17, 134)';
    }
    else if (event.type === 'mousedown') {
        console.log('mousedown');
        box.style.backgroundColor = 'rgb(28, 17, 134)';
    }
}

function clearGrid() {
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
}