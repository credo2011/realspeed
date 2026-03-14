let car = document.getElementById("car")

let speed = 5
let boost = false

document.addEventListener("keydown",control)

function control(e){

if(e.key == "ArrowLeft"){
car.style.left = car.offsetLeft - 20 + "px"
}

if(e.key == "ArrowRight"){
car.style.left = car.offsetLeft + 20 + "px"
}

if(e.key == "ArrowUp"){
speed = 10
}

}

document.addEventListener("keyup",function(){
speed = 5
})

function gameLoop(){

window.scrollBy(0,speed)

requestAnimationFrame(gameLoop)

}

gameLoop()
