
let lastRendeTime = 0;
const SNAKE_SPEED = 3
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime -lastRendeTime) /1000
        if (secondsSinceLastRender < 1 /SNAKE_SPEED) return 
    console.log('render')
    lastRendeTime = currentTime
    
    update()
    draw()
}
window.requestAnimationFrame(main)