function spawnEnemy(){

let enemy = document.createElement("img")

enemy.src = "https://i.imgur.com/7Qp1K6T.png"
enemy.className = "enemy"

enemy.style.left = Math.random()*window.innerWidth + "px"
enemy.style.top = "-100px"

document.body.appendChild(enemy)

let move = setInterval(()=>{

enemy.style.top = enemy.offsetTop + 5 + "px"

if(enemy.offsetTop > window.innerHeight){

enemy.remove()
clearInterval(move)

}

},30)

}

setInterval(spawnEnemy,2000)
