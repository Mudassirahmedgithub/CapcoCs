"use client";
import * as THREE from "three";
import type { Object3D } from "three";
import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  Heart,
  Play,
} from "lucide-react";

// Enhanced ParticleHero Component
function ParticleHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particle systems
    const particleSystems: THREE.Points[] = [];

    const createParticleSystem = (
      count: number,
      color: THREE.ColorRepresentation,
      size: number,
      spread: number
    ): THREE.Points => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread;
        positions[i + 1] = (Math.random() - 0.5) * spread;
        positions[i + 2] = (Math.random() - 0.5) * spread;

        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

      const material = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    particleSystems.push(createParticleSystem(5000, 0x00ffff, 0.8, 200));
    particleSystems.push(createParticleSystem(3000, 0x6366f1, 0.6, 180));
    particleSystems.push(createParticleSystem(2000, 0xa855f7, 1.2, 150));

    particleSystems.forEach(ps => scene.add(ps));

    // Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let frame = 0;
    const animate = () => {
      frame += 0.01;

      particleSystems.forEach((system, index) => {
        system.rotation.y += 0.0003 * (index + 1);
        system.rotation.x += 0.0002 * (index + 1);

        system.rotation.x += mouseRef.current.y * 0.0005;
        system.rotation.y += mouseRef.current.x * 0.0005;

        const pos = system.geometry.attributes.position.array as Float32Array;
        const vel = system.geometry.attributes.velocity.array as Float32Array;

        for (let i = 0; i < pos.length; i += 3) {
          pos[i + 1] += Math.sin(frame + pos[i] * 0.01) * 0.02;

          pos[i] += vel[i];
          pos[i + 1] += vel[i + 1];
          pos[i + 2] += vel[i + 2];
        }

        system.geometry.attributes.position.needsUpdate = true;
      });

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

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      particleSystems.forEach(p => {
        p.geometry.dispose();
        if (Array.isArray(p.material)) {
          p.material.forEach(m => m.dispose());
        } else {
          p.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}


export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      desc: "We embrace forward-thinking solutions to solve complex business challenges.",
      icon: Lightbulb,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Integrity",
      desc: "We operate with complete honesty and transparency in everything we do.",
      icon: Shield,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Client Focus",
      desc: "Our clients' success is at the heart of every decision we make.",
      icon: Heart,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Collaboration",
      desc: "We believe great results come from strong partnerships and teamwork.",
      icon: Users,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Growth",
      desc: "We continuously evolve to help businesses scale and thrive.",
      icon: TrendingUp,
      gradient: "from-cyan-500 to-sky-600",
    },
    {
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in delivery and execution.",
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Particle Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Load Three.js */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        
        {/* WebGL Particle Background */}
        <ParticleHero />

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="mb-6 inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
                  <span className="text-cyan-400 font-semibold tracking-wider text-sm">
                    ✦ TRANSFORMING BUSINESSES GLOBALLY
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  Engineering <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                    Digital Excellence
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  Strategic IT consulting, cloud transformation, and scalable
                  technology solutions for global enterprises.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                    Get Started
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>

                  <button className="group px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-5 h-5 fill-white" />
                    </div>
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* Company Intro */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-bold tracking-wider shadow-lg">
              WHO WE ARE
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Complete Honesty and <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Transparency
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              CAPCO is a globally recognized consulting firm committed to empowering organizations across Qatar, India, and Canada. With a focus on tailored business solutions, operational efficiency, and long-term success, CAPCO serves as a trusted partner in consulting, human resource management, and technology services.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { number: '500+', label: 'Projects Delivered', color: 'from-cyan-400 to-blue-500' },
              { number: '50+', label: 'Global Clients', color: 'from-violet-400 to-purple-500' },
              { number: '15+', label: 'Years Experience', color: 'from-pink-400 to-rose-500' },
              { number: '98%', label: 'Client Satisfaction', color: 'from-emerald-400 to-teal-500' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-bold tracking-wider">
              OUR PRINCIPLES
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Core Values That <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Drive Excellence
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors text-lg">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white font-bold text-2xl">Building Tomorrow, Together</div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-bold tracking-wider">
                ABOUT US
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At CAPCO, we specialize in empowering businesses across Qatar, India, and Canada with innovative solutions and strategies. We are committed to transforming organizations by fostering resilience, optimizing operational efficiency, and driving sustainable growth.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Through collaborative partnerships, we address complex challenges and deliver lasting value to our clients, employees, and communities.
              </p>
              <button className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 hover:scale-105">
                Learn More About Us 
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform <br /> Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Join the organizations that trust CAPCO for world-class consulting services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-12 py-5 bg-white text-violet-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
                Get in Touch
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-12 py-5 border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-violet-600 transition-all duration-300 hover:scale-105">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}