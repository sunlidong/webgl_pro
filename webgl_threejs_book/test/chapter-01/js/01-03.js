function init() {


    // 创建一个场景 
    var scene = new THREE.Scene();

    // var camera = new THREE.PserspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);

    // chuangjian yige toushi shexiangji  创建一个透视摄像机
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    //  创建一个  web Gl的渲染器 
    var renderer = new THREE.WebGLRenderer();

    //  设置背景色
    renderer.setClearColor(new THREE.Color(0x000000));
    
    //  设置尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 创建一个立方体  
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    // 创建一个材质
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });
    // 创建网格对象
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // 允许投射阴影 
    cube.castShadow = true;
    //  设置 坐标 
    cube.position.x = -4;
    cube.position.y = 2;
    cube.position.z = 0;

    // 创建一个球体
    var shpereGeometry = new THREE.SphereGeometry(4, 20, 20);
    // 创建一种材质 设置颜色
    var shpereMaterial = new THREE.MeshLambertMaterial({
        color: 0x77777ff
    });
    // 创建网格对象  mesh  
    var sphere = new THREE.Mesh(shpereGeometry, shpereMaterial);

    //  设置 网格对象 sphere 位置 
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;

    // 是否允许阴影
    sphere.castShadow = true;

    // 创建一个平面几何体
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    // var planeMaterial = new THREE.MeshLabertMaterial({  错误 
    //     color: 0xAAAAAA
    // });

    // 创建一种材质 
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA
    });

    // 创建一个网格对象 
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    //  x 旋转 
    plane.rotation.x = -0.5 * Math.PI;
    // 设置坐标 
    plane.position.set(15, 0, 0);

    /*
    2.灯光生成阴影

light.castShadow = true;
3.地面接收阴影
plane.receiveShadow = true;
4.物体产生阴影
mesh.castShadow = true;
    
    */ 
    plane.receiveShadow = true;

    // 场景添加  
    scene.add(cube);
    scene.add(sphere);
    scene.add(plane);


    // 设置相机视角
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    // 相机视角调整
    camera.lookAt(scene.position);

    //  创建一种光
    var spotLight = new THREE.SpotLight(0xFFFFFF);
    // 设置光源的位置
    spotLight.position.set(-40, 40, -15);
    // 地面是否接受阴影
    spotLight.castShadow = true;
    // 二维向量
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    // 相机最远
    spotLight.shadow.camera.far = 130;
    // 相机最近
    spotLight.shadow.camera.near = 40;

    // 场景添加光源
    scene.add(spotLight);

    // 创建一个环境光
    var ambientLight = new THREE.AmbientLight(0x353535);

    // 添加环境光
    scene.add(ambientLight);

    //  获取 div 元素 添加  渲染对象
    document.getElementById("webgl-output").appendChild(renderer.domElement);


    //  渲染器渲染 
    renderer.render(scene, camera);

}

function craeteBoundingWall(scene) {

    // 创建立方体
    var wallLeft = new THREE.CubeGeomtery(70, 2, 2);
    var wallRight = new THREE.CubeGeometry(70, 2, 2);
    var wallTop = new THREE.CubeGeometry(2, 2, 50);
    var wallBottom = new THREE.CubeGeometry(2, 2, 50);

    // 创建环境光
    var wallMaterial = new THREE.MeshLambertMaterial({
        color: 0xa0522d
    });

    //  创建网格对象
    var wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
    var wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
    var wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
    var wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);


    // 分别设置 坐标 
    wallLeftMesh.position.set(15, 1, -25);
    wallRightMesh.position.set(15, 1, 25);
    wallTopMesh.position.set(-19, 1, 0);
    wallBottomMesh.position.set(49, 1, 0);

    // 加入场景
    scene.add(wallLeftMesh);
    scene.add(wallRightMesh);
    scene.add(wallBottomMesh);
    scene.add(wallTopMesh);

}


function ceateGroundPlane(scene) {
    // 二维平面几何体
    var planeGeometry = new THREE.PlaneGeometry(70, 50);
    // 创建材质 
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x9acd32
    });
    // 创建网格对象
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // 接收阴影
    plane.receiveShadow = true;
    // 旋转
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = 15;
    plane.position.z = 0;

    //  添加到场景中
    scene.add(plane);
}

function creatHouse(scene) {
    // 创建立方体
    var roof = new THREE.ConeGeometry(5, 4);
    //  CylinderGeometry 几何体
    var base = new THREE.CylinderGeometry(5, 5, 6);

    // 创建 网格对象 
    var rootMesh = new THREE.Mesh(roof, new THREE.MeshLamberMaterial({
        color: 0x8b7213
    }));
    // 又创建网格对象
    var baseMesh = new THREE.Mesh(base, new THREE.MeshLambertMaterial({
        color: 0xffe4c4
    }));

    // set xyz       
    roofMesh.position.set(25, 8, 0);
    baseMesh.position.set(25, 3, 0);

    //     // 接收阴影
    roofMesh.receiveShadow = true;
        //     // 接收阴影
    baseMesh.receiveShadow = true;
        // 地面是否接受阴影
    rootMesh.castShadow = true;
        // 地面是否接受阴影
    baseMesh.castShadow = true;

    // 添加到场景中
    scene.add(rootMesh);
    // 添加到场景中
    scene.add(baseMesh);

}

function createTree(scene) {
    // 创建一个 立方体
    var trunk = new THREE.CubeGeometry(1, 8, 1);
    // 创建几何体
    var leaves = new THREE.SphereGeometry(4);

    // 创建网格对象 + 颜色设置
    var trunkMesh = new THREE.Mesh(trunk, new THREE.MeshLabertMaterial({
        color: 0x8b4513

    }));
    

    // 创建网格对象 
    var leavesMesh = new THREE.Mesh(leaves, new THREE.MeshLambertMaterial({
        color: 0x00ff00
    }));

    // set xyz
    trunkMesh.position.set(-10, 4, 0);
    // set xyz
    leavesMesh.position.set(-10, 12, 0);
    // 阴影
    trunkMesh.castShadow = true;
    // 阴影
    trunkMesh.receiveShadow = true;
    // 阴影
    leavesMesh.castShadow = true;
    // 阴影
    leavesMesh.receiveShadow = true;

    // 添加到场景中
    scene.add(trunkMesh);
    
    scene.add(leavesMesh);
}