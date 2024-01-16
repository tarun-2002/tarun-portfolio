import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

const Stars = ({ scrollY, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }));

  useEffect(() => {
    gsap.to(ref.current.rotation, {
      duration: 1,
      x: scrollY / 10000,
      y: -scrollY / 5000,
      ease: "power3.out",
    });
  }, [scrollY]);

  return (
    <Points ref={ref} positions={sphere} {...props}>
      <PointMaterial
        transparent
        color="#8A52D6"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Stars scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
