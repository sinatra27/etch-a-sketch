// Initialize a container for the square divs
const container = document.querySelector('.container');

// temp size
let size = 16;

// Use For loop to create size x size grid of square divs, add square divs under the container div
for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// Declare variables for RGB values
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

