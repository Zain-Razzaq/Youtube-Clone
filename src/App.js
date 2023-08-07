import { createContext, useState } from "react";

import AppRoutes from "./AppRoutes";
import { HOME_BUTTON } from "./components/MenuBar/constants";

export const SelectedButtonContext = createContext();

function App() {
  const [selectedButton, setSelectedButton] = useState(HOME_BUTTON);

  return (
    <SelectedButtonContext.Provider value={[selectedButton, setSelectedButton]}>
      <AppRoutes />
    </SelectedButtonContext.Provider>
  );
}

export default App;
