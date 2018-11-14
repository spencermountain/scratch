<template>
  <div class="center f3 dimgrey">
    <div id="container" class="outline m4 h32"></div>
    hello {{foo}}
    <br/>
    <input type="button" value="+1" class="button" v-on:click="click"/>
  </div>
</template>

<script>
import * as data from './data.json'
import * as THREE from 'three'
import Stats from './lib/stats.js'
// import * as tmp from "./lib/orbitControls.js"

export default {
  name:'App',
  data() {
    return {
      foo:23,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      mesh2: null,
      stats: null
    }
  },
  methods: {
    makeCamera(){
      // zoom, aspect, near, far
      this.camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 0.01, 1000);
      // this.camera.position.x = 100;
      this.camera.position.z = 100;
      this.camera.position.y = -65;

      this.camera.rotation.x = 0.5;
    },
    makeLights(){
      this.scene.add( new THREE.AmbientLight( 0xffffff , 0.2) );
			// var light = new THREE.PointLight( 0xffffff, 0.6 );
      // light.position.set(20, -10, 30)
      // light.castShadow = true;
      // this.scene.add( light );
			var light2 = new THREE.PointLight( 0xaaaaaa, 0.9 );
      light2.position.set(30, -30, 60)
      light2.castShadow = true;
      this.scene.add( light2 );
    },
    addHelpers(){
      var gridHelper = new THREE.GridHelper( 20, 20, 0xff00ff, 0x80ffff );
      gridHelper.position.y =  0;
      gridHelper.position.x =  0;
      this.scene.add( gridHelper );
      var sphere = new THREE.SphereGeometry(0,0);
      var object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0xff0000 ) );
      var box = new THREE.BoxHelper( object, 0xffff00 );
      this.scene.add( box );
      var axesHelper = new THREE.AxesHelper( 5 );
      this.scene.add( axesHelper );
    },
    makeBox(){
      let geometry = new THREE.BoxGeometry(12, 12, 8);
      let material = new THREE.MeshPhongMaterial({color:0x4682B4}  );
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.z=20
      this.mesh.castShadow=true
      this.scene.add(this.mesh);
    },
    makeBox2(){
      let geometry = new THREE.BoxGeometry(12, 12, 8);
      let material = new THREE.MeshPhongMaterial({color:0xff82B4}  );
      this.mesh2 = new THREE.Mesh(geometry, material);
      this.mesh2.position.z=20
      this.mesh2.position.x=20
      this.mesh2.position.y=-20
      this.mesh2.castShadow=true
      this.scene.add(this.mesh2);
    },
    makeSlab(){
      //width, height, depth
      let geometry = new THREE.BoxGeometry(75, 100, 2);
      let material = new THREE.MeshLambertMaterial({color:0xaaaaaa}  );
      let mesh = new THREE.Mesh(geometry, material);
      mesh.receiveShadow=true
      this.scene.add(mesh);
    },

    init: function() {
      let container = document.getElementById('container');
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0xffffff );

      this.makeCamera()
      this.makeLights()
      // this.addHelpers()
      this.makeBox()
      this.makeBox2()
      this.makeSlab()

      this.stats = new Stats();
			container.appendChild( this.stats.dom );

      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.shadowMap.enabled = true;
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.mesh2.rotation.x += 0.01;
      this.mesh2.rotation.y += 0.02;
      // let diff=2
      // if(Math.random()>0.5){
      //   diff*=-1
      // }
      // this.mesh.position.z += diff;
      this.stats.update();
      this.renderer.render(this.scene, this.camera);
    },
    click:function(){
      this.foo+=1
    }
  },
  mounted() {
      this.init();
      this.animate()
  }
}
</script>

<style>
body { margin: 0; }
canvas { width: 100%; height: 100% }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss">
@import './lib/spencer.min.css';
</style>
