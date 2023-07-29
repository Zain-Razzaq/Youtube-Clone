import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./AllRoutes";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="App">
      <Navbar collapse={collapse} setCollapse={setCollapse} />
      <AllRoutes />
    </div>
  );
}

export default App;
