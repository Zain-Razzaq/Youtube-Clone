import { useContext } from "react";

import { collapseContext } from "../LayoutBase";

const MenuItem = ({ icon, title, selected }) => {
  const [collapse] = useContext(collapseContext);

  return (
    <div
      className={`flex  items-center rounded-lg hover:bg-neutral-100 cursor-pointer 
      ${selected && "bg-neutral-100"}
      ${collapse ? `h-20 flex-col justify-center w-16` : `px-2 h-10 w-52`}`}
    >
      <div className="px-1">{icon}</div>
      <span
        className={`${selected ? "font-medium" : "font-light"}
        ${collapse ? `text-[10px]` : `ml-4 text-sm`}`}
      >
        {title}
      </span>
    </div>
  );
};

export default MenuItem;
