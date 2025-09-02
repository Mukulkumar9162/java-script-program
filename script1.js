// script.js

let score = 0;
let timeLeft = 30;
let snacks = document.querySelectorAll('.snack');
let snackSpeed = 2; // speed of the snack movement
let snackSize = 50; // initial size of the snack
let foodSize = 20; // size of the food
let foodElement; // food element

// Function to generate random snack positions
function generateSnackPosition(snack) {
    const x = Math.floor(Math.random() * (800 - snackSize));
    const y = Math.floor(Math.random() * (600 - snackSize));
    snack.style.top = `${y}px`;
    snack.style.left = `${x}px`;
}

// Function to handle snack movement
function moveSnack(snack) {
    let x = parseInt(snack.style.left);
    let y = parseInt(snack.style.top);
    let direction = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left

    switch (direction) {
        case 0:
            y -= snackSpeed;
            break;
        case 1:
            x += snackSpeed;
            break;
        case 2:
            y += snackSpeed;
            break;
        case 3:
            x -= snackSpeed;
            break;
    }

    snack.style.top = `${y}px`;
    snack.style.left = `${x}px`;

    // Check for collision with walls
    if (x < 0 || x + snackSize > 800 || y < 0 || y + snackSize > 600) {
        gameOver();
    }
}

// Function to handle snack clicks (eating food)
function handleSnackClick(snack) {
    score++;
    document.getElementById('score').innerText = score;
    snackSize += 10; // increase snack size
    snack.style.width = `${snackSize}px`;
    snack.style.height = `${snackSize}px`;
    generateFood();
}

// Function to generate food
function generateFood() {
    foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.style.width = `${foodSize}px`;
    foodElement.style.height = `${foodSize}px`;
    foodElement.style.top = `${Math.floor(Math.random() * (600 - foodSize))}px`;
    foodElement.style.left = `${Math.floor(Math.random() * (800 - foodSize))}px`;
    document.body.appendChild(foodElement);
}

// Function to update time
function updateTime() {
    timeLeft--;
    document.getElementById('time').innerText = timeLeft;
    if (timeLeft <= 0) {
        gameOver();
    }
}

// Function to handle game over
function gameOver() {
    alert(`Game Over! Your score is ${score}`);
    location.reload(); // reload the game
}

// Initialize game
snacks.forEach((snack) => {
    generateSnackPosition(snack);
    snack.addEventListener('click', () => handleSnackClick(snack));
    setInterval(() => moveSnack(snack), 100); // move snack every 100ms
});

generateFood();
setInterval(updateTime, 1000);