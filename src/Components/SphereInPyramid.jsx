import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SphereInPyramid = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(2, 4, 6);
    camera.lookAt(0, 0, 0);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Pyramid
    const pyramidGeometry = new THREE.ConeGeometry(2, 3, 4, 1, true);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x949494 });
    const pyramidEdges = new THREE.EdgesGeometry(pyramidGeometry);
    const pyramid = new THREE.LineSegments(pyramidEdges, wireframeMaterial);
    scene.add(pyramid);

    // Inner sphere
    const innerSphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const innerSphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0xffffff) },
        glowPower: { value: 0.5 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        uniform float glowPower;

        void main() {
          vec3 lightDir = vec3(1.0, 0.0, 0.0);
          float intensity = pow(1.0 - dot(vNormal, lightDir), glowPower * 5.0);
          gl_FragColor = vec4(glowColor * intensity, 1.0);
        }
      `,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeometry, innerSphereMaterial);
    innerSphere.position.y = -0.5;
    scene.add(innerSphere);

    // Outer sphere
    const outerSphereGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const outerSphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xf0f0f0,
      transparent: true,
      opacity: 0.3,
    });
    const outerSphere = new THREE.Mesh(outerSphereGeometry, outerSphereMaterial);
    outerSphere.position.y = -0.5;
    scene.add(outerSphere);

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2;
      positions[i + 1] = Math.random() * 2;
      positions[i + 2] = (Math.random() - 0.5) * 2;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x4aecfc,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.set(2, 4, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);

    // Resize handling
    const onResize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation
    let hue = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update glow color
      hue += 0.5;
      if (hue > 360) hue = 0;
      innerSphereMaterial.uniforms.glowColor.value.setHSL(hue / 360, 1, 0.5);

      // Rotate pyramid
      pyramid.rotation.y += 0.005;

      // Update particles
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i + 1] -= 0.01;
        if (
          positions[i + 1] < -1.5 ||
          positions[i + 1] > 1.5 ||
          Math.abs(positions[i]) > 1 ||
          Math.abs(positions[i + 2]) > 1
        ) {
          positions[i + 1] = Math.random() * 2 - 1;
          positions[i] = (Math.random() - 0.5) * 2;
          positions[i + 2] = (Math.random() - 0.5) * 2;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default SphereInPyramid;