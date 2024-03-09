// Select container for square divs
const container = document.querySelector('.container');

// Select color pickers and buttons for background colors
const bgColorPicker = document.querySelector('#bgColorLabel');
const penColorPicker = document.querySelector('#penColorLabel');
const rainbowButton = document.querySelector('#rainbowBtn');
const gridlinesButton = document.querySelector('#gridlinesBtn');
const eraserButton = document.querySelector('#eraserBtn');
const clearButton = document.querySelector('#clearBtn');

// Declare variables for current selected grid background color and pen color
let bgColor = document.getElementById('bgColorSelect').value;
let penColor = document.getElementById('penColorSelect').value;

// Create grid with passed in input size selected
function createGrid(size) {
    container.style.backgroundColor = bgColor;
    // Clear grid when grid size is changed
    container.replaceChildren();
    // Create size x size grid of square divs, add divs under the container
    for (let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            if (gridlinesOn) square.style.border = '1px solid #696969';
            square.classList.add('square');
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

// Update grid background color 
function bgColorUpdate(bgColorValue) {
    container.style.backgroundColor = bgColorValue;
    bgColor = bgColorValue;
    bgColorPicker.style.backgroundColor = bgColor;
}

// Update pen color
function penColorUpdate(penColorValue) {
    penColor = penColorValue;
    penColorPicker.style.backgroundColor = penColor;
}

// Rainbow mode (random RGB pen color)
let r, g, b;                        // Declare variables for random RGB values
let rainbowMode = false;
function rainbowToggle() {
    rainbowMode = !rainbowMode;
    if (rainbowMode) rainbowButton.style.background = 'linear-gradient(in hsl longer hue 135deg, cyan 0 0)';
    else rainbowButton.style.background = 'transparent';
}

// Gridlines toggle on/off
let gridlinesOn = false;            // Declare variable for default gridlines off
function gridlinesToggle() {
    gridlinesOn = !gridlinesOn;
    if (gridlinesOn) {
        Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.border = '1px solid #696969');
        gridlinesButton.style.backgroundImage = 'linear-gradient(to right, #696969 1px, transparent 1px), linear-gradient(to bottom, #696969 1px, transparent 1px)';
    } else {
        Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.border = 'none');
        gridlinesButton.style.backgroundImage = 'none';
    }     
}

// Eraser toggle on/off
let eraserOn = false;
function eraserToggle() {
    eraserOn = !eraserOn;
    if (eraserOn) eraserButton.style.background = '#fcee0a';
    else eraserButton.style.background = 'transparent';
}

// Clear grid while keeping current settings
function clearGrid() {
    Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.backgroundColor = null);
}

// Declare variable for mouse down, set initital value to false
let mouseDown = false;
document.body.onmouseup = () => (mouseDown = false); 
document.body.onmousedown = () => (mouseDown = true);

// Change pen color for squares; add concurrent events for both mouse hover and pressed down
let changeColor = document.querySelector('div');
changeColor.addEventListener('mouseover', sketch);
changeColor.addEventListener('mousedown', sketch);

// Change color of selected square
function sketch(e) {
        // Conditional when mouse is not pressed down
        if (e.type === 'mouseover' && !mouseDown) return;
        // Conditional when erasor or rainbow mode is selected
        if (eraserOn) e.target.style.backgroundColor = null;
        else if (rainbowMode) {
            // Randomize RGB values for square colors. RGB color range: 0-255
            r = Math.floor(Math.random() * 255);        
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        else e.target.style.backgroundColor = penColor;
        // Keep current grid bg color static; disable ability to change bg color by selecting the container border
        container.style.backgroundColor = bgColor;
};

createGrid(16);                     // Initial grid size set at 16 x 16


