const grid = document.querySelector('.grid');

//---I need to look back to the notes to see if what I'm doing matches them next time I'm on---
function addCell(gridRow, celltext){
    const cell = document.createElement('cell');
    cell.classList.add('cell');
    cell.textContent = celltext
    gridRow.appendChild(cell);
}

function addRow(cols, row){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    grid.appendChild(gridRow);
    for (let c = 0; c < cols; c++){
        const celltext = String(row) + '-' + String(c);
        addCell(gridRow, celltext);
    } 
}

function createGrid(rows,cols){
    for (let r = 0; r < rows; r++){
        addRow(cols, r);
    }
}

createGrid(16,16);