const buttons = document.querySelectorAll("buttons");
const screen = document.querySelector(".screen");

let pixel = "";
let gridSize = 10;

const drawGrid = (screenSize) => {
  for (i = 0; i < screenSize ** 2; i++) {
    pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColour = "white";
    screen.appendChild(pixel);
  }

  screen.style.gridTemplateColumns = `repeat(${screenSize},auto)`;
  screen.style.gridTemplateRows = `repeat(${screenSize},auto)`;
};

drawGrid(gridSize);

// slider display
let slider = document.getElementById("sizeSlider");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
