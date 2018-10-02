var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
helper.position.y = -75;
scene.add(helper);

scene.add(new THREE.AmbientLight(0x111111));
// var pointLight = new THREE.PointLight(0xffffff, 1);
// scene.add(pointLight);


var animate = function () {
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
};

animate();
