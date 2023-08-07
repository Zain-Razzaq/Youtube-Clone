import { createContext, useState } from "react";

import AppRoutes from "./AppRoutes";

export const SelectedButtonContext = createContext();

function App() {
  const [selectedButton, setSelectedButton] = useState("Home");

  return (
    <SelectedButtonContext.Provider value={[selectedButton, setSelectedButton]}>
      <AppRoutes />
    </SelectedButtonContext.Provider>
  );
}

export default App;
