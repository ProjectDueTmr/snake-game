
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake";

let lastRendeTime = 0;
const gameBoard = document.getElementById('gameBoard')


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime -lastRendeTime) /1000
        if (secondsSinceLastRender < 1 /SNAKE_SPEED) return 
    lastRendeTime = currentTime
    
    update()

    draw()
}
window.requestAnimationFrame(main)

function update() {
updateSnake()
}

function draw() {
drawSnake(gameBoard)
}