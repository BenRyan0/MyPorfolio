import { Html} from "@react-three/drei";
// import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
    style={{
    position: "fixed",
    top: "40%",
    left: "90%",
    transform: "translate(-60%, -90%) rotate(-3deg)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

  }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 20,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* {progress.toFixed(2)}% */}
      </p>
    </Html>
  );
};

export default CanvasLoader;
