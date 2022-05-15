import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// const maxRange = 1000;
// const minRange = maxRange / 2;

export const init = () => {
  /**
   * Base
   */
  // Debug
  const gui = new dat.GUI({
    width: 400,
    closed: true,
  });

  // Canvas
  const canvas = document.querySelector("canvas.snowfall_webgl");

  // Scene
  const scene = new THREE.Scene();

  /**
   * Galaxy
   */
  const parameters = {
    count: 3000,
    size: 1,
    radius: 5,
    branches: 4,
    spin: 1,
    maxRange: 100,
    minRange: 100 / 2,
    minHeight: 150,
    randomness: 0.7,
    randomnessPower: 3,
    texture: 3,
    velocityY: 1,
    cameraRotation: 2.75,
  };

  // let yVelocities = [-0.04, -0.02, 0.02, 0.04];
  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader();

  let geometry = null;
  let material = null;
  let particles = null;
  let positions = [];
  let velocities = [];
  geometry = new THREE.BufferGeometry();

  const generateGalaxy = () => {
    // const particleTexture = textureLoader.load(
    //   `./textures/particles/${parameters.texture}.png`
    // );
    //production
    const particleTexture = textureLoader.load(
      `/img/textures/${parameters.texture}.png`
    );
    console.log(particleTexture);

    // destroy old galaxy
    if (particles !== null) {
      console.log("happened");
      geometry.dispose();
      material.dispose();
      scene.remove(particles);
    }

    for (let i = 0; i < parameters.count; i++) {
      positions.push(
        Math.floor(Math.random() * parameters.maxRange - parameters.minRange),
        Math.floor(Math.random() * parameters.minRange - parameters.minHeight),
        Math.floor(Math.random() * parameters.maxRange - parameters.minRange)
      );

      velocities.push(
        Math.floor(Math.random() * 6 - 3) * 0.001,
        Math.floor(Math.random() * 5 + 0.12) * 0.002,
        Math.floor(Math.random() * 6 - 3) * 0.01
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "velocity",
      new THREE.Float32BufferAttribute(velocities, 3)
    );

    //material

    material = new THREE.PointsMaterial({
      size: parameters.size,
      color: 0x334455,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      alphaMap: particleTexture,
      transparent: false,
    });

    particles = new THREE.Points(geometry, material);

    scene.add(particles);
  };

  generateGalaxy();

  gui
    .add(parameters, "count")
    .min(50)
    .max(5000)
    .step(10)
    .onFinishChange(generateGalaxy);
  gui
    .add(parameters, "size")
    .min(0.5)
    .max(2)
    .step(0.1)
    .onFinishChange(generateGalaxy);
  gui
    .add(parameters, "cameraRotation")
    .min(0)
    .max(4)
    .step(0.01)
    .onFinishChange(generateGalaxy);

  gui
    .add(parameters, "velocityY")
    .min(1)
    .max(20)
    .step(0.5)
    .onFinishChange(generateGalaxy);

  gui
    .add(parameters, "texture")
    .min(1)
    .max(13)
    .step(1)
    .onFinishChange(generateGalaxy);
  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.1,
    1500
  );
  camera.rotation.set(2.75, 0, 0);
  camera.position.set(3, 24, 30);
  camera.rotation.needsUpdate = true;
  scene.add(camera);

  // Controls
  // const controls = new OrbitControls(camera, canvas);
  // controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // renderer.setClearColor(0x000000, 0);

  /**
   * Animate
   */

  function updateParticles() {
    //console.log(particles.geometry);

    for (let i = 0; i < parameters.count * 3; i += 3) {
      particles.geometry.attributes.position.array[i] -=
        particles.geometry.attributes.velocity.array[i];

      particles.geometry.attributes.position.array[i + 1] -=
        particles.geometry.attributes.velocity.array[i + 1] *
        parameters.velocityY;

      particles.geometry.attributes.position.array[i + 2] -=
        particles.geometry.attributes.velocity.array[i + 2];

      if (particles.geometry.attributes.position.array[i + 1] < 0) {
        particles.geometry.attributes.position.array[i] -= Math.floor(
          Math.random() * parameters.maxRange - parameters.minRange
        );

        particles.geometry.attributes.position.array[i + 1] -= Math.floor(
          Math.random() * parameters.maxRange - parameters.minHeight
        );

        particles.geometry.attributes.position.array[i + 2] -= Math.floor(
          Math.random() * parameters.maxRange - parameters.minRange
        );
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    //particles.geometry.attributes.velocities.needsUpdate = true;
  }

  //const clock = new THREE.Clock();
  // const clock = new THREE.Clock();
  const tick = () => {
    //const elapsedTime = clock.getElapsedTime();

    camera.rotation.set(0, 0, parameters.cameraRotation);

    updateParticles();

    // Update controls
    // controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
};
