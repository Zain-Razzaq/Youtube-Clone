import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import MenuBar from "./components/menuBar/MenuBar";
import TagsBar from "./components/tagsBar/TagsBar";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="App">
      <Navbar collapse={collapse} setCollapse={setCollapse} />
      <div className="flex w-100">
        <div className={collapse ? "w-[6%]" : "w-[15%]"}>
          <MenuBar collapse={collapse} />
        </div>
        <div className="ml-2 w-[85%] flex flex-col">
          <div className="">
            <TagsBar />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
