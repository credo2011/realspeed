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
light.position.set(5,10,5)
scene.add(light)

const roadGeo = new THREE.PlaneGeometry(400,20)
const roadMat = new THREE.MeshStandardMaterial({color:0x333333})
const road = new THREE.Mesh(roadGeo,roadMat)

road.rotation.x = -Math.PI/2
scene.add(road)

const carGeo = new THREE.BoxGeometry(2,1,4)
const carMat = new THREE.MeshStandardMaterial({color:0xff0000})
const car = new THREE.Mesh(carGeo,carMat)

car.position.y = 0.5
scene.add(car)

const enemyGeo = new THREE.BoxGeometry(2,1,4)
const enemyMat = new THREE.MeshStandardMaterial({color:0x00ff00})
const enemy = new THREE.Mesh(enemyGeo,enemyMat)

enemy.position.set(2,0.5,-20)
scene.add(enemy)

let coins = []

for(let i=0;i<20;i++){

const coinGeo = new THREE.CylinderGeometry(0.5,0.5,0.2,16)
const coinMat = new THREE.MeshStandardMaterial({color:0xffff00})
const coin = new THREE.Mesh(coinGeo,coinMat)

coin.rotation.x = Math.PI/2
coin.position.set(
(Math.random()*10)-5,
0.5,
-Math.random()*200
)

scene.add(coin)
coins.push(coin)

}

let speed = 0.2
let score = 0

document.addEventListener("keydown",(e)=>{

if(e.key=="ArrowUp") speed=0.4
if(e.key=="ArrowDown") speed=0.1
if(e.key=="ArrowLeft") car.position.x -= 0.5
if(e.key=="ArrowRight") car.position.x += 0.5

})

function animate(){

requestAnimationFrame(animate)

car.position.z -= speed

enemy.position.z += 0.15

coins.forEach((coin,i)=>{

if(car.position.distanceTo(coin.position) < 1.5){

scene.remove(coin)
coins.splice(i,1)

score += 10
console.log("Money:",score)

}

})

camera.position.set(
car.position.x,
5,
car.position.z + 10
)

camera.lookAt(car.position)

renderer.render(scene,camera)

}

animate()
