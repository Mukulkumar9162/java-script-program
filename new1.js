// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Set the snake and food dimensions
const snakeSize = 20;
const foodSize = 20;

// Set the initial snake position and direction
let snakeX = canvas.width / 2;
let snakeY = canvas.height / 2;
let direction = 'right';

// Set the initial food position
let foodX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
let foodY = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;

// Set the initial score
let score = 0;

// Set the snake body
let snakeBody = [];

// Draw the snake and food
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY, foodSize, foodSize);

    // Draw the snake body
    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, snakeSize, snakeSize);
    }
}

// Update the snake position
function update() {
    // Update the snake position based on the direction
    if (direction === 'right') {
        snakeX += snakeSize;
    } else if (direction === 'left') {
        snakeX -= snakeSize;
    } else if (direction === 'up') {
        snakeY -= snakeSize;
    } else if (direction === 'down') {
        snakeY += snakeSize;
    }

    // Check if the snake has eaten the food
    if (snakeX === foodX && snakeY === foodY) {
        score++;
        foodX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
        foodY = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
    }

    // Update the snake body
    snakeBody.push({ x: snakeX, y: snakeY });
    if (snakeBody.length > score) {
        snakeBody.shift();
    }

    // Check if the snake has collided with the wall or itself
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
        alert('Game Over!');
        location.reload();
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i].x && snakeY === snakeBody[i].y) {
            alert('Game Over!');
            location.reload();
        }
    }
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    } else if (e.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (e.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    } else if (e.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    }
});

// Main game loop
setInterval(() => {
    update();
    draw();
}, 100);