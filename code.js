const grid = document.querySelector('.grid');
const rootSelector = document.querySelector(':root');
rgbArr = [136,100,219];

//---I need to look back to the notes to see if what I'm doing matches them next time I'm on---
function addCell(gridRow, celltext){
    const cell = document.createElement('cell');
    cell.classList.add('cell');
    cell.id = celltext;
    cell.addEventListener('mouseenter',addTrail);
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

function colourUpdate(){
    rgbArr = rgbArr.map(randomAdjust);
    console.log(rgbArr);
    rootSelector.style.setProperty('--painted-cell-colour', `rgb(${rgbArr[0]} ${rgbArr[1]} ${rgbArr[2]})` );
}

function randomAdjust(colour){
    //Adust colour up or down by up to 30
    const rand = Math.ceil(Math.random()*60) - 30
    //Max value of rgb is 255. Manually force numbers up from zero, or down from 255.
    if (colour + rand < 0 ){
        return colour - rand;
    } else if( colour + rand > 255 ){
        return colour - rand;
    } else{ 
        return colour + rand;
    }
}

function addTrail(e){
    const cell = e.target;
    const node = e.node;
    colourUpdate();
    cell.classList.add('paintedCell');
}

createGrid(24,24);