import Layout from "./components/Layout/Layout";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-242596264-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return <Layout />;
}

export default App;
