 function init() {


     // 创建场景
     var scene = new THREE.Scene();


     // 创建相机  透视投影相机模式一般用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式

     /*
        上述代码中，new THREE.PerspectiveCamera构造函数用来创建透视投影相机，该构造函数总共有四个参数，分别是fov，aspect，near，far 。fov表示摄像机视锥体垂直视野角度，最小值为0，最大值为180，默认值为50，实际项目中一般都定义45，因为45最接近人正常睁眼角度；aspect表示摄像机视锥体长宽比，默认长宽比为1，即表示看到的是正方形，实际项目中使用的是屏幕的宽高比；near表示摄像机视锥体近端面，这个值默认为0.1，实际项目中都会设置为1；far表示摄像机视锥体远端面，默认为2000，这个值可以是无限的，说的简单点就是我们视觉所能看到的最远距离。

    除了上述四个基本属性之外，透视投影相机六个属性，分别是：filmGauge，filmOffset，focus，isPerspectiveCamera，view，zoom。这几个参数在实际应用中很少用到，基本都保持默认值。如果想了解各属性的意义及完成的功能可以通过官方文档去了解。
        */
     var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);


     //  创建渲染器 
     var renderer = new THREE.WebGLRenderer();


     //  替换背景色
     renderer.setClearColor(new THREE.Color(0x000000));

     // 设置 渲染器尺寸
     renderer.setSize(window.innerWidth, window.innerHeight);

     // Three.js 三维坐标系 AxesHelper 
     var axes = new THREE.AxesHelper(20);

     // 将 三维坐标系 添加到 场景中 
     scene.add(axes);

     //    PlaneGeometry 是二维平面几何体，看上去是扁平的，因为它只有两个维度，给定宽高，即可创建这种几何体
     var planeGeometry = new THREE.PlaneGeometry(60, 20);
     //  MeshBasicMaterial是一种非常简单的材质，这种材质不考虑场景中光照的影响。使用这种材质的网格会被渲染成简单的平面多边形，而且也可以显示几何体的线框。
     var planeMaterial = new THREE.MeshBasicMaterial({
         color: 0xAAAAAA
     });
     //  创建一个网格对象 
     var plane = new THREE.Mesh(planeGeometry, planeMaterial);


     //   plane.rotation.x = -0.5*Math.PI;  //x轴旋转-90度
     plane.rotation.x = -0.5 * Math.PI;

     //  平移矩阵 平移矩阵 平移这个mesh
     plane.position.set(15, 0, 0);

     // 矩阵添加到 场景中
     scene.add(plane);

     // 创建一个立方体  BoxGeometry
     var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);

     // 创建 简单的材质 
     var cubeMaterial = new THREE.MeshBasicMaterial({
         // color	材料的颜色值，默认为白色
         color: 0xFF0000,
         // wireframe	是否以线框模式呈现，默认为false
         wireframe: true
     });


        //  创建一个网格对象 
     var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


     //  平移矩阵
     cube.position.set(-4, 3, 0);

     //  添加到场景中 
     scene.add(cube);

        //  SphereGeometry 球体是 three.js 中较简单的另一种几何体
        /*
        radius	可选。此属性定义球体的半径。
        widthSegments	可选。此属性定义球体竖直（维度）方向上的分段数。默认值是 8，最小值是 3
        heightSegments	可选。此属性定义球体水平（经度）方向上的分段数。默认值是 6，最小值是 2
        phiStart	可选。此属性定义从 x 轴的什么地方开始绘制。取值范围是 0 到 2*π
        phiLength	可选。此属性定义从 phiStart 开始绘制多少。取值范围是 0 到 2*π
        thetaStart	可选。此属性定义从 y 轴的什么地方开始绘制。取值范围是 0 到 π
        thetaLength	可选。此属性定义从 thetaStart 开始绘制多少。取值范围是 0 到 π。一个 π 是整球，0.5*π只绘制上半球
        */
     var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);

        //  创建 材质 
     var sphereMaterial = new THREE.MeshBasicMaterial({
         color: 0x77777FF,
         wireframe: true
     });

        //  创建网格对象
     var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // 设置 坐标 位置 
     cube.position.set(-4, 3, 0);

        //  添加到场景 
     scene.add(cube);

        //    SphereGeometry 球体
     var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        //      创建材质  
     var sphereMaterial = new THREE.MeshBasicMaterial({
         color: 0x7777FF,
         wireframe: true
     });

        // 创建 网格对象 
     var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // 设置坐标
     sphere.position.set(20, 4, 2);

        //  相机设置 坐标  观察点  
     camera.position.set(-30, 40, 30);

        //  looKAt camera为相机看的目标点：因为屏幕显示的是相机视椎体的可视范围，而相机的lookAt方法指的是相机观察的目标点
     camera.lookAt(scene.position);

        //   获取  div 对象  
     document.getElementById("webgl-output").appendChild(renderer.domElement);

        //  渲染器渲染 场景 和相机 
     renderer.render(scene, camera);


 }