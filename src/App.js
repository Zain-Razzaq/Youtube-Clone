import { useState } from "react";

import MenuBar from "./components/menuBar/MenuBar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="App">
      <Navbar collapse={collapse} setCollapse={setCollapse} />
      <div>
        <MenuBar collapse={collapse} />
      </div>
    </div>
  );
}

export default App;
