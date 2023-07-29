import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { createContext } from "react";

export const collapseContext = createContext();

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="App">
      <collapseContext.Provider value={[collapse, setCollapse]}>
        <Navbar />
        <AllRoutes />
      </collapseContext.Provider>
    </div>
  );
}

export default App;
