import { useState } from "react";
import { createContext } from "react";

import MenuBar from "../MenuBar";
import Navbar from "../Navbar";

export const collapseContext = createContext();

const LayoutBase = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <collapseContext.Provider value={[collapse, setCollapse]}>
        <Navbar />
        <MenuBar />
      </collapseContext.Provider>
      <div className="flex">
        <div className={`mt-16 ${collapse ? "ml-20" : "ml-56"}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutBase;
