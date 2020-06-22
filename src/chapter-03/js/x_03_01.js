function init() {


    // use the defaults   stats renderer  camera 
    var stats = initStats();
    var renderer = initRenderer();
    var camera = initCamera();


    //  creat a scene  创建一个场景 
    var scene = new THREE.Scene();

    // // 场景当中添加了THREE.AmbientLight光源，光源的颜色将会影响全局的每一个物体每一个面的颜色。该光源没有特别得来源方向，也不会产生阴影。 
    // var ambientlight = new THREE.AmbientLight("#606008",1);

    // // add scene  
    // scene.add(ambientlight);

    var ambientLight = new THREE.AmbientLight("#606008", 1);
    scene.add(ambientLight);

    /*
    THREE.SpotLight 是一种具有锥形效果的光源，该光源拥有产生光的方向和角度。我们可以将其与手电筒或者灯笼产生的光进行对比。
    THREE.SpotLight 是最常使用的光源之一，特别是如果我们想要使用阴影的话。  
    原文出自：www.hangge.com  转载请保留原文链接：https://www.hangge.com/blog/cache/detail_1812.html
    */ 

    var spotLight = new THREE.SpotLight(0xffffff,1,180,Math.PI / 4);

    spotLight.shadow.mapSize.set(2048,2048);
    spotLight.position.set(-30,40,-10);
    spotLight.castShadow = true;


    // 添加到场景中
    scene.add(spotLight);

    /*
    add a simple scene
    虽然这一形状的名字叫立方体（CubeGeometry），但它其实是长方体，也就是长宽高可以设置为不同的值


    材质  
    */ 
    addHouseAndTree(scene)


    // 添加 controls 

    var controls = setupControls();


    // 渲染  render 

    render();


    // 渲染 
    function render (){
        stats.update();
        requestAnimationFrame(render);
        renderer.render(scene,camera);
    }

    function setupControls() {

        var controls = new function () {

            debugger;
            this.intensity = ambientLight.intensity;
            this.ambientColor = ambientLight.color.getStyle();
            this.disableSpotlight = false;
        };

        var gui = new dat.GUI();

        gui.add(controls,'intensity',0,3,0.1).onChange(function(e){
            ambientLight.color = new THREE.Color(controls.ambientColor);
            ambientLight.intensity = controls.intensity;
        });

        gui.addColor(controls,'ambientColor').onChange(function(e){
            ambientLight.color = new THREE.Color(controls.ambientColor);
            ambientLight.intensity = controls.intensity; 
        });

        gui.add(controls,'disableSpotlight').onChange(function(e){
            spotlight.visible = !e;
        });
        return controls;
    }
}