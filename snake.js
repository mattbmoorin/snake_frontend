import { getInputDireciton } from "./input.js";

export const SNAKE_SPEED = 1;
const snakeBody = [{
    x: 10,
    y: 11
}];

export function update() {
    const inputDireciton = getInputDireciton();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += 0;
    snakeBody[1].y += 1;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}