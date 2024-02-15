// Initialize a container for the square divs
const container = document.querySelector('.container');

// Declare variable for the current selected grid background color
let bgColor = document.getElementById('bgColorSelect').value;

// Declare variable for the current selected pen color
let penColor = document.getElementById('penColorSelect').value;

// Function to create grid while passing in the input size by the user
function createGrid(size) {
    container.style.backgroundColor = bgColor;
    // Clear grid when grid size is changed
    container.replaceChildren();
    // Use For loops to create size x size grid of square divs, add divs under the container
    for (let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            if (!gridlinesOn) square.style.border = 'none';
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
    mouseDown = false;
}

// Update pen color
function penColorUpdate(penColorValue) {
    penColor = penColorValue;
    // gridlinesToggle();              // option to change grid line color to match pen color?
}

// Rainbow mode (random RGB pen color)
let r, g, b;                        // Declare variables for random RGB values
let rainbowMode = false;
function rainbowToggle() {
    rainbowMode = !rainbowMode;
}

// Gridlines toggle on/off
let gridlinesOn = true;
function gridlinesToggle() {
    gridlinesOn = !gridlinesOn;
    if (!gridlinesOn) {
        Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.border = 'none');
    }
    else {
        Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.border = '1px solid #696969');
        // Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.border = '1px solid ' + penColor);
    }     
}

// Eraser toggle on/off
let eraserOn = false;
function eraserToggle() {
    eraserOn = !eraserOn;    
}

// Clear grid while keeping current settings
function clearGrid() {
    Array.from(document.querySelectorAll('.square')).forEach((el) => el.style.backgroundColor = null);
}

// Declare variable for mouse down and up, set initital value to false
let mouseDown = false;
document.body.onmouseup = () => (mouseDown = false); 
document.body.onmousedown = () => (mouseDown = true);

// Change pen color for squares; add concurrent events for both mouse hover and pressed down
let changeColor = document.querySelector('div');
changeColor.addEventListener('mouseover', sketch);
changeColor.addEventListener('mousedown', sketch);

function sketch(e) {
        // Use conditional for when mouse is not pressed down
        if (e.type === 'mouseover' && !mouseDown) return;
        // Use conditional for when erasor or rainbow mode is selected based on user's choice
        if (eraserOn) e.target.style.backgroundColor = null;
        else if (rainbowMode) {
            // Randomize RGB values for square colors. RGB color range is 0-255
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


