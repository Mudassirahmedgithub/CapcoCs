"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 120;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // =========================
    // Particles
    // =========================
    const DOTS = 5000;
    const DEPTH = 1200;

    const positions = new Float32Array(DOTS * 3);
    const speeds = new Float32Array(DOTS);

    for (let i = 0; i < DOTS; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 400; // X
      positions[i3 + 1] = (Math.random() - 0.5) * 250; // Y
      positions[i3 + 2] = -Math.random() * DEPTH; // Z depth

      speeds[i] = 0.8 + Math.random() * 1.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00eaff,
      size: 1.6,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // =========================
    // Animation
    // =========================
    const animate = () => {
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < DOTS; i++) {
        const i3 = i * 3;

        // Move forward
        pos[i3 + 2] += speeds[i];

        // Reset particle to back when it passes camera
        if (pos[i3 + 2] > camera.position.z) {
          pos[i3 + 2] = -DEPTH;
          pos[i3] = (Math.random() - 0.5) * 400;
          pos[i3 + 1] = (Math.random() - 0.5) * 250;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Subtle cinematic drift
      scene.rotation.y += 0.0004;
      scene.rotation.x += 0.00015;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
}
