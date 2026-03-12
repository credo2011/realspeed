const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(10,20,10)
scene.add(light)

const roadGeo = new THREE.PlaneGeometry(2000,20)
const roadMat = new THREE.MeshStandardMaterial({color:0x444444})

const road = new THREE.Mesh(roadGeo,roadMat)
road.rotation.x = -Math.PI/2
scene.add(road)

for(let i=0;i<200;i++){

let buildingGeo = new THREE.BoxGeometry(
Math.random()*10+5,
Math.random()*40+10,
Math.random()*10+5
)

let buildingMat = new THREE.MeshStandardMaterial({color:0x888888})

let building = new THREE.Mesh(buildingGeo,buildingMat)

building.position.x = (Math.random()*200)-100
building.position.z = -Math.random()*2000
building.position.y = building.geometry.parameters.height/2
building.position.x += building.position.x > 0 ? 20 : -20

scene.add(building)

}

const carGeo = new THREE.BoxGeometry(2,1,4)
const carMat = new THREE.MeshStandardMaterial({color:0xff0000})

const car = new THREE.Mesh(carGeo,carMat)
car.position.y = 0.5
scene.add(car)

const enemyGeo = new THREE.BoxGeometry(2,1,4)
const enemyMat = new THREE.MeshStandardMaterial({color:0x00ff00})

const enemy = new THREE.Mesh(enemyGeo,enemyMat)
enemy.position.set(2,0.5,-40)

scene.add(enemy)

let coins = []

for(let i=0;i<50;i++){

let geo = new THREE.CylinderGeometry(0.5,0.5,0.2,16)
let mat = new THREE.MeshStandardMaterial({color:0xffff00})

let coin = new THREE.Mesh(geo,mat)

coin.rotation.x = Math.PI/2

coin.position.set(
(Math.random()*10)-5,
0.5,
-Math.random()*2000
)

scene.add(coin)

coins.push(coin)

}

let boosts = []

for(let i=0;i<15;i++){

let geo = new THREE.BoxGeometry(2,0.2,2)
let mat = new THREE.MeshStandardMaterial({color:0x00ffff})

let boost = new THREE.Mesh(geo,mat)

boost.position.set(
(Math.random()*10)-5,
0.2,
-Math.random()*2000
)

scene.add(boost)

boosts.push(boost)

}

let speed = 0.2
let score = 0

document.addEventListener("keydown",(e)=>{

if(e.key=="ArrowUp") speed = 0.5
if(e.key=="ArrowDown") speed = 0.1
if(e.key=="ArrowLeft") car.position.x -= 0.7
if(e.key=="ArrowRight") car.position.x += 0.7

})

function animate(){

requestAnimationFrame(animate)

car.position.z -= speed

enemy.position.z += 0.2

coins.forEach((coin,i)=>{

if(car.position.distanceTo(coin.position) < 1.5){

scene.remove(coin)
coins.splice(i,1)

score += 10

document.getElementById("score").innerText =
"Money: "+score

}

})

boosts.forEach((boost,i)=>{

if(car.position.distanceTo(boost.position) < 2){

speed = 1

setTimeout(()=>{
speed = 0.5
},2000)

}

})

camera.position.set(
car.position.x,
6,
car.position.z + 12
)

camera.lookAt(car.position)

renderer.render(scene,camera)

}

animate()
