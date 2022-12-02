import Body from "./components/Body";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="bg-ellipse"></div>
      <div className="main">
        <SideBar />
        <Body/>
      </div>
    </div>
  );
}

export default App;
