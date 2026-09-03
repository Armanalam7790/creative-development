import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//created our scene
const scene = new THREE.Scene()


const clock = new THREE.Clock()

const size={
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(
  75, size.width / size.height,
  0.1,
  100)

  camera.position.z = 5
  
 

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: "red",
  

})

const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const canvas = document.querySelector('#webgl')

const renderer = new THREE.WebGLRenderer(
  {
    canvas: canvas

  })


 

renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.max(2,window.devicePixelRatio))
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
window.addEventListener('resize', () => {
  size.width = window.innerWidth
  size.height = window.innerHeight
 camera.aspect = size.width / size.height
 camera.updateProjectionMatrix()
 renderer.setSize(size.width, size.height)

})
  const animate  = () => {
    const delta = clock.getElapsedTime()
    cube.rotation.y = delta
controls.update();
renderer.render(scene, camera)
requestAnimationFrame(animate)
  }

animate()