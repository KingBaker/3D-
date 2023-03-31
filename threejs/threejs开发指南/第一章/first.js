import * as THREE from "https://unpkg.com/three/build/three.module.js";
import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/17/Stats.js'
// import * as dat from 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.js'

let camera
let scene
let renderer

function init() {
    scene = new THREE.Scene();
    let stats = initStats()

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(
        45, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
    )

    // create a render and set the size
    renderer = new THREE.WebGLRenderer();
    // renderer.setClearColorHex();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true
    // renderer.shadowMapEnabled = true;

    // show axes in the screen
    // let axes = new THREE.AxesHelper(20);
    // scene.add(axes);

    // create the ground plane
    let planeGeometry = new THREE.PlaneGeometry(60, 20);
    let planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0)

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000, 
        // wireframe: true
    });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true

    // position the cube
    cube.position.set(-4, 3, 0)

    // add the cube to the scene
    scene.add(cube);

    // create a sphere
    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    let sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff,
        // wireframe: true
    });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true

    // position the sphere
    sphere.position.set(20, 4, 2)

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position);

    // 为阴影添加聚光灯
    let spotLight = new THREE.SpotLight(0xFFFFFF)
    spotLight.position.set(-40, 60, -10)
    spotLight.castShadow = true
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
    // spotLight.shadow.camera.far = 130
    // spotLight.shadow.camera.near = 40
    scene.add(spotLight)

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    let step = 0
    let controls = new function () {
        this.rotationSpeed = 0.02;
        this.bouncingSpeed = 0.03;
    };

    let gui = new dat.GUI();

    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'bouncingSpeed', 0, 0.5);
    renderScene()

    function renderScene() {
        stats.update()
        // cube.position.y += Math.sin(step) * .2
        // cube.rotation.x += 0.02
        // cube.rotation.y += 0.02
        // cube.rotation.z += 0.02
        cube.rotation.x += controls.rotationSpeed
        cube.rotation.y += controls.rotationSpeed
        cube.rotation.z += controls.rotationSpeed

        // step += 0.04;
        step += controls.bouncingSpeed
        sphere.position.x = 20 + (10 * (Math.cos(step)))
        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)))

        requestAnimationFrame(renderScene)
        renderer.render(scene, camera);
    }

    function initStats() {
        let stats = new Stats()

        stats.setMode(0)
        // let panelType = (typeof type !== 'undefined' && type) 
        // && (!isNaN(type)) ? parseInt(type) : 0

        // stats.showPanel(panelType)

        stats.domElement.style.position = 'absolute'
        stats.domElement.style.left = '0px'
        stats.domElement.style.top = '0px'

        document.getElementById("Stats-output").appendChild(stats.domElement);
        return stats;
    }

    // render the scene
    
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
// init()
window.onload = init;

// 监听窗口变化
window.addEventListener('resize', onResize, false)