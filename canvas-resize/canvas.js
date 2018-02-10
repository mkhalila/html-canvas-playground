const canvas = document.documentElement.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creating a super object to draw within the Canvas
const context = canvas.getContext('2d');

// context.fillRect(x, y, width, height);
// From top left of screen
context.fillRect(100, 100, 100, 100);
context.fillRect(300, 100, 100, 100);
context.fillRect(200, 200, 100, 100);
