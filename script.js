const sketchGrid = document.querySelector('.sketch-grid');

//Needs slider to determine n and i values
let gridSize = 16;

for (let n = 0; n < gridSize; n++) {
    const row = document.createElement('div');
    row.classList.add('row');
    sketchGrid.appendChild(row);
    console.log(`${n} row added`);
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
        console.log(`${n} box added`);
    }
}

