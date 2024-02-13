// Initialize a container for the square divs
const container = document.querySelector('.container');

// Prompt the user to select grid size
    // let size = Number(window.prompt('Please type a number (max 100) for grid size...'));

// Function to create grid while passing in the input size by the user
function createGrid(size) {
    // Clear grid when grid size is changed
    container.replaceChildren();
    // Use For loops to create size x size grid of square divs, add divs under the container
    for (let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

// Declare variables to use with random RGB values
    // let randomColor;
let r, g, b;

// Change color of square divs
let changeColor = document.querySelector('div');
changeColor.addEventListener('mouseover', (e) => {
        // e.target.classList.replace('square', 'color');
        // randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // e.target.style.backgroundColor = '#' + randomColor;
    // Use conditional to select colors based on user's choice

    // Randomize RGB values to change square colors
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


// let sizeRange = document.querySelector("#rangeSize");
// let sizeValue = Number(sizeRange.value);

createGrid(16);                     // Grid size default set at 16 x 16





// add user options: grid size and regen, bg color, pen color, grid on/off
// optional: darkening effect
