const canvas = document.documentElement.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creating a super object to draw within the Canvas
const context = canvas.getContext('2d');

// context.fillRect(x, y, width, height);
// From top left of screen
// context.fillStyle = "rgba(255, 0, 0, 0.1)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgba(0, 0, 255, 0.5)";
// context.fillRect(300, 100, 100, 100);
// context.fillStyle = "rgba(0, 255, 0, 0.9)";
// context.fillRect(200, 200, 100, 100);

// Line
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);

// context.strokeStyle = "red";
// context.stroke();

// Arc/Circle
// context.beginPath();
// context.arc(300, 300, 30, 0, Math.PI * 2, false);
// context.strokeStyle = 'purple';
// context.stroke();

function genXY() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  };
}

function genQuantity() {
   return parseInt(
    Math.random() * 1.5 *
     (Math.abs(window.innerHeight - window.innerWidth))
  );
}

function genColoursString() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const a = Math.random().toFixed(1);
  return `rgba(${r},${g},${b},${a})`;
}

function drawRectangle() {
  const { x, y } = genXY();
  context.fillStyle = genColoursString();
  context.fillRect(x, y, Math.random() * 120, Math.random() * 120);
}

function drawCircle() {
  const { x, y } = genXY();
  context.beginPath();
  context.arc(x, y, Math.random() * 75, Math.random() * 360, Math.PI * Math.random() * 2, Math.random() >= 0.5);
  context.strokeStyle = genColoursString();
  context.stroke();
}

function drawLine() {
  const { x, y } = genXY();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(genXY().x, genXY().y);
  context.strokeStyle = genColoursString();
  context.stroke();
}

setInterval(() => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const elements = genQuantity();

  for (let i = 0; i < elements; ++i) {
    const randInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch(randInt) {
      case 1: 
        drawRectangle();
        break;
      case 2:
        drawCircle();
        break;
    default: 
      drawLine();
    }
  }
}, 1000);