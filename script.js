const buttons = document.querySelectorAll('buttons')
const screen = document.querySelector('.screen')

let pixel = '';
let gridSize = 50;

const drawGrid = (screenSize) => {
    for (i = 0; i < screenSize ** 2; i++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColour = 'white';
    screen.appendChild(pixel); }

    screen.style.gridTemplateColumns = `repeat(${screenSize},auto)`;
    screen.style.gridTemplateRows = `repeat(${screenSize},auto)`;
}