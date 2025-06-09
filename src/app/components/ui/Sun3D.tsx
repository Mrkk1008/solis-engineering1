'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Environment, Float, PresentationControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function SunCore() {
  const sunRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particles for the sun's atmosphere
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    const color = new THREE.Color();

    for (let i = 0; i < 2000; i++) {
      const distance = Math.random() * 2 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);

      color.setHSL(0.1, 0.9, Math.random() * 0.3 + 0.7);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geometry;
  }, []);

  // Custom shader for sun surface
  const surfaceShader = useMemo(
    () => ({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color('#FFE744') },
        colorB: { value: new THREE.Color('#FF7A1F') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform vec3 colorB;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        //	Simplex 3D Noise 
        //	by Ian McEwan, Ashima Arts
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        
        float snoise(vec3 v){ 
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 =   v - i + dot(i, C.xxx) ;
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
          
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1. + 3.0 * C.xxx;
          
          i = mod(i, 289.0 ); 
          vec4 p = permute( permute( permute( 
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                  
          float n_ = 1.0/7.0;
          vec3  ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );
          
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
          
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
          
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                      dot(p2,x2), dot(p3,x3) ) );
        }
        
        void main() {
          float noise = snoise(vec3(vUv * 8.0, time * 0.2));
          float fresnel = pow(1.0 + dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 finalColor = mix(color, colorB, noise * 0.6 + 0.2);
          finalColor = mix(finalColor, vec3(1.0), fresnel * 0.6);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (sunRef.current && coronaRef.current && particlesRef.current) {
      // Rotate sun
      sunRef.current.rotation.y += 0.002;
      coronaRef.current.rotation.z -= 0.001;
      particlesRef.current.rotation.y += 0.0005;

      // Update shader time
      sunRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group>
      {/* Main sun sphere */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2, 128, 128]} />
        <shaderMaterial
          attach="material"
          {...surfaceShader}
          transparent
        />
        <pointLight color="#FFE744" intensity={2} distance={10} />
      </mesh>

      {/* Corona effect */}
      <mesh ref={coronaRef} scale={1.2}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#FF7A1F"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer glow */}
      <mesh scale={1.4}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#FF4D00"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Particle system */}
      <points ref={particlesRef}>
        {/* <primitive object={particles} /> */}
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function Sun3D() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#000']} />
        <Environment preset="night" />
        
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap
        >
          <Float rotationIntensity={0.2}>
            <SunCore />
          </Float>
        </PresentationControls>

        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
} 