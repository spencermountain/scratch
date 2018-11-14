<template>
  <div class="center f3 dimgrey">
    <div id="container" class="outline m4 h32"></div>
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
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      stats: null,
      clock: new THREE.Clock(),
      cube:null
    }
  },
  methods:{
    makeCamera(){
      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
			this.camera.position.set( 0, 20, 27 );
			this.camera.rotation.x=-0.8;
    },
    addCube(){
      var geometry = new THREE.BoxBufferGeometry( 3, 3, 3 );
      var material = new THREE.MeshPhongMaterial( {
        color: 0xff0000,
        shininess: 150,
        specular: 0x222222
      });
      this.cube = new THREE.Mesh( geometry, material );
			this.cube.position.set( 8, 3, 8 );
      this.cube.castShadow = true;
			this.cube.receiveShadow = true;
			this.scene.add( this.cube );
    },
    addGround(){
      var geometry = new THREE.BoxBufferGeometry( 10, 0.15, 10 );
			var material = new THREE.MeshPhongMaterial( {
				color: 0xa0adaf,
				shininess: 150,
				specular: 0x111111
			} );
			var ground = new THREE.Mesh( geometry, material );
			ground.scale.multiplyScalar( 3 );
			ground.castShadow = false;
			ground.receiveShadow = true;
			this.scene.add( ground );
    },
    addLights(){
      this.scene.add( new THREE.AmbientLight( 0x404040 ) );
      let spotLight = new THREE.SpotLight( 0xffffff );
			spotLight.angle = 1.9;
			spotLight.penumbra = 0.8;
			spotLight.position.set( 10, 10, 20 );
			spotLight.castShadow = true;
			// spotLight.shadow.camera.near = 8;
			// spotLight.shadow.camera.far = 30;
			spotLight.shadow.mapSize.width = 9024;
			spotLight.shadow.mapSize.height = 9024;
			this.scene.add( spotLight );
      this.scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );
    },

    init(){
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0x4d4d4d );

      this.makeCamera()
      this.addLights()
      this.addCube()
      this.addGround()

      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			this.renderer.shadowMap.enabled = true;
			this.renderer.shadowMap.type = THREE.BasicShadowMap;
      container.appendChild(this.renderer.domElement);
      this.renderer.render( this.scene, this.camera );
    },
    animate(){
      // requestAnimationFrame( this.animate );
      console.log(`~=~=~**here**~=~`)

      var delta = this.clock.getDelta();
      this.cube.position.x += 2.25 //* delta;
			// this.cube.rotation.y += 2 * delta;
			// this.cube.rotation.z += 1 * delta;
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
