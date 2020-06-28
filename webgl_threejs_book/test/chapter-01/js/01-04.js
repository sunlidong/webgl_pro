function init() {
    var stats = initStats();


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.nnerWith / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWith, window.innerHeight);
    renderer.shadowMap.enabled = true;

    var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.receiveShadow = true;

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    scene.add(plane);


    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000
    });

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.castShadow = true;

    cube.position.x = -4;
    cube.position.y = 4;
    cube.position.z = 4;

    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff
    });

    var sphere = new THREE.Mesh(sphererGeometry, sphereMaterial);

    sphere.position.x = 20;
    sphere.position.y = 0;
    sphere.position.z = 2;
    sphere.castShadow = true;

    scene.add(sphere);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    var ambientLight = new THREE.AmbientLight(0x353535);

    scene.add(ambientLight);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-10, 20, -5);
    spotLight.castShadow = true;
    scene.add(spotLight);

    document.getElementById("webgl-output").appendChild(renderer.domElement);



    var step = 0;

    renderScene();

    function renderScene() {
        stats.update();

        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        cube.rotation.z += 0.02;

        step += 0.04;
        sphere.position.x = 20 + (10 * (Math.cos(step)));
        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }

}