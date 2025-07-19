import { Html} from "@react-three/drei";
// import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // const { progress } = useProgress();
  return (
<Html
  as="div"
  style={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-40%, -50%) rotate(-3deg)", // perfect center with tilt
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "red", // for visibility
    zIndex: 1000,
    width: "auto", // optional cleanup
  }}
>
  <span className="canvas-loader"></span>
  <p
    style={{
      fontSize: 30,
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
