// import React from 'react'
// import { render } from 'react-dom';
// import * as THREE from "three"

// export default function ArScene() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//         75, // fov
//         window.innerWidth / window.innerHeight, // aspect ratio
//         0.1, // clip planes
//         1000 // clip planes
//     );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(
//     window.innerWidth,
//     window.innerHeight,
//     document.body.appendChild,
//     renderer.domElement

// );

// const geometry = new THREE.BoxGeometry(
//     1,
//     1,
//     1
// );

// const material = new THREE.MeshBasicMaterial(
//     {color: 0x00ff00}
// );

// const cube = new THREE.Mesh(
//     geometry,
//     material
// );

// camera.position.z = 5;

// scene.add(cube);

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// animate();

//   return (
//     <div>ArScene</div>
//   )
// }
