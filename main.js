import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
const loader = new FontLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let text;
const font = loader.load( 'fonts/AldoTheApache.typeface.json', function ( font ) {

	const geometry = new TextGeometry( 'D C', {
        font: font,
        size: 1,
        height: 0.1,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.04,
        bevelSegments: 16
    } );
    const material = new THREE.MeshStandardMaterial({color: 0xef9cac});
    text = new THREE.Mesh(geometry, material);
    text.geometry.center();
    scene.add(text);

} );





const light = new THREE.PointLight( 0xffffff, 60, 0);
light.position.set(0, 0, 5);
scene.add( light );

// const alight = new THREE.AmbientLight(0x404040);
// alight.position.set(0, 0, 5);
// scene.add(alight);




camera.position.z = 5;

let t = 0;

let a = false;
let b = false;
let c = false;
let d = false;

let dr = Math.PI / 30;
function animate() {
    requestAnimationFrame(animate);

    if(text) { 
        text.rotation.x += 0.01;
    }

    renderer.render(scene, camera);
}
animate();

