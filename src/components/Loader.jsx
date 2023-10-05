
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
<PacmanLoader color="#36d7b7"
size={60}
/>
    </div>

    </>
  )
}

export default Loader