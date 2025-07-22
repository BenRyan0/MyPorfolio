import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
// import laptopScene from "../../assets/3d/gaming_laptop.glb";
import laptopScene from "/3d/br-laptop.glb";
// import laptopScene from "../../assets/3d/br-laptop.glb";
import CanvasLoader from "./Loader";
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from "@react-spring/three";
import { Center } from "@react-three/drei";

const Laptop = ({ scale, position, rotationX, rotationY, positionDefault }) => {
  const laptopRef = useRef();
  const { scene, animations } = useGLTF(laptopScene);
  const { actions } = useAnimations(animations, laptopRef);

  // eslint-disable-next-line no-unused-vars
  const [mouseX, setMouseX] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [mouseY, setMouseY] = useState(0);

  const spring = useSpring({
    rotation: [rotationX + mouseY * 1.2, rotationY + mouseX * 1.5, 6.33],
    config: { mass: 1, tension: 120, friction: 20 }, // smooth feel
  });

  useEffect(() => {
    const idleAction = actions && actions["Idle"];
    if (idleAction) {
      idleAction.play();
    }
  }, [actions]);

  console.log("scale", scale);
  console.log("position", position);

  return (
    <animated.mesh
      ref={laptopRef}
      position={position}
      scale={scale}
      rotation={spring.rotation} // smooth spring rotation
    >
      <primitive object={scene} position={positionDefault} />
      {/* <primitive object={scene} position={[-0.6, 0, -0.15]} /> */}
    </animated.mesh>
  );
};
const LaptopCanvas = ({ scrollContainer }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const defaultRotation = [0, 0, 0]; // your original rotation
  // const defaultRotation = [-0.064, 0.02, -0.150]; // your original rotation
  const lastActiveRef = useRef(Date.now());
  const [isInactive, setIsInactive] = useState(false);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([1.4, 1.4, 1.4]);
  const [position, setPosition] = useState([0, 0, 0]);
  const [positionDefault, setPositionDefault] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastActiveRef.current > 2000) {
        setIsInactive(true);
      }
    }, 1000); // check every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;

      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
      console.log(scrollTop);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.55, 0.55, 0.29]);
        setPosition([-0.3, -1.4, -0.9]);
        setPositionDefault([-0.6, 3, -0.9]);
      } else if (window.innerWidth < 1024) {
        setScale([1.2, 1.2, 0.59]);
        setPosition([-0.3, -1.4, -0.9]);
        setPositionDefault([-1, 0, 0.3]);
      } else if (window.innerWidth < 1280) {
        setScale([1.2, 1.2, 0.59]);
        setPosition([-0.3, -1.4, -0.9]);
        setPositionDefault([-1, 0, 0.3]);
      } else if (window.innerWidth < 1536) {
        setScale([1.3, 1.3, 0.59]);
        setPosition([-0.8, -1.4, -0.9]);
        setPositionDefault([-0.1, 0, -0.9]);
      } else {
        setScale([1.2, 1.2, 0.59]);
        setPosition([-0.3, -1.4, -0.9]);
        setPositionDefault([-1.599, 0, -0.9]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    lastActiveRef.current = Date.now();
    setIsInactive(false);

    // Normalize to range between -1 and 1
    const rawX = (clientX / innerWidth - 0.5) * 2;
    const rawY = (clientY / innerHeight - 0.5) * 2;

    // Clamp to avoid wild movement
    const clampedX = clamp(rawX, -0.05, 0.05);
    const clampedY = clamp(rawY, -0.05, 0.05);

    setMouseX(clampedX);
    setMouseY(clampedY);
  };

  const computedRotationX = isInactive
    ? defaultRotation[0]
    : rotationX + mouseY * 1.2;
  const computedRotationY = isInactive
    ? defaultRotation[1]
    : rotationY + mouseX * 1.5;





  return (
    <Canvas
      className={`w-full h-screen z-10 mt-10 rotate-3 bg-transparent`}
      camera={{ near: 0.1, far: 1000 }}
      onPointerMove={handleMouseMove}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 3, 2]} intensity={8} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <Laptop
          rotationX={computedRotationX}
          rotationY={computedRotationY}
          scale={scale}
          position={position}
          positionDefault={positionDefault}
        />
      </Suspense>
    </Canvas>
  );
};

export default LaptopCanvas;
