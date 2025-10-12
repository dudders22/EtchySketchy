const grid = document.querySelector('.grid');
const pixelInput = document.querySelector('#pixelCount');
const pixelSubmit = document.querySelector('#resetBtn');
rgbArr = [136,100,219];

//---I need to look back to the notes to see if what I'm doing matches them next time I'm on---
function addCell(gridRow, celltext){
    const cell = document.createElement('cell');
    cell.classList.add('cell');
    cell.id = celltext;
    cell.addEventListener('mouseenter',addTrail);
    gridRow.appendChild(cell);
}

function addRow(len){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    grid.appendChild(gridRow);
    for (let c = 0; c < len; c++){
        const celltext = String(len) + '-' + String(c);
        addCell(gridRow, celltext);
    } 
}

function createGrid(){
    //Delete existing rows.
    let rows = document.querySelectorAll('.gridRow');
    rows.forEach((row) => row.remove())
    
    //revert to 24 for invalid input (I'm not adjusting for text, but if this was real I should)
    let pixels = pixelInput.value;
    if (pixels > 100 | pixels < 0){
        pixels = 24
    }
    for (let r = 0; r < pixels; r++){
        addRow(pixels);
    }
}

function colourUpdate(targ){
    rgbArr = rgbArr.map(randomAdjust);
    targ.style.setProperty('background-color', `rgb(${rgbArr[0]} ${rgbArr[1]} ${rgbArr[2]})` );
}

function randomAdjust(colour){
    //Adust colour up or down by up to 30
    const rand = Math.ceil(Math.random()*30) - 15
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
    colourUpdate(cell);
    cell.classList.add('paintedCell');
}

createGrid();
pixelSubmit.addEventListener('click',createGrid);