import { createContext, useState } from "react";

import AllRoutes from "./AppRoutes";

export const selectedButtonContext = createContext();

function App() {
  const [selectedButton, setSelectedButton] = useState("Home");

  return (
    <selectedButtonContext.Provider value={[selectedButton, setSelectedButton]}>
      <AllRoutes />
    </selectedButtonContext.Provider>
  );
}

export default App;
