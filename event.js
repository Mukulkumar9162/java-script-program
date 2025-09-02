// script.js

let score = 0;
let timeLeft = 30;
let snacks = document.querySelectorAll('.snack');

// Function to generate random snack positions
function generateSnackPosition(snack) {
    const x = Math.floor(Math.random() * (800 - 50));
    const y = Math.floor(Math.random() * (600 - 50));
    snack.style.top = `${y}px`;
    snack.style.left = `${x}px`;
}

// Function to handle snack clicks
function handleSnackClick(snack) {
    score++;
    document.getElementById('score').innerText = score;
    generateSnackPosition(snack);
}

// Function to update time
function updateTime() {
    timeLeft--;
    document.getElementById('time').innerText = timeLeft;
    if (timeLeft <= 0) {
        alert(`Game Over! Your score is ${score}`);
    }
}

// Initialize game
snacks.forEach((snack) => {
    generateSnackPosition(snack);
    snack.addEventListener('click', () => handleSnackClick(snack));
});

setInterval(updateTime, 1000);