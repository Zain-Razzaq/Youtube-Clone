import { useContext } from "react";

import { HomeIcon, ShortsIcon, SubscriptionsIcon, FavoriteIcon } from "./icons";
import MenuItem from "./MenuItem";
import { selectedButtonContext } from "../../App";

const MenuBar = () => {
  const [selectedButton, setSelectedButton] = useContext(selectedButtonContext);
  const handelClickOnHomeButton = () => {
    setSelectedButton("Home");
  };
  const handelClickOnFavoriteButton = () => {
    setSelectedButton("Favorites");
  };

  return (
    <div className="p-2 mt-16 bg-white divide-y h-screen overflow-scroll fixed">
      <div className="my-2">
        <div onClick={handelClickOnHomeButton}>
          <MenuItem
            icon={<HomeIcon selected={selectedButton === "Home"} />}
            title="Home"
            selected={selectedButton === "Home"}
          />
        </div>
        <MenuItem icon={<ShortsIcon />} title="Shorts" />
        <MenuItem icon={<SubscriptionsIcon />} title="Subscriptions" />
      </div>
      <div onClick={handelClickOnFavoriteButton}>
        <MenuItem
          icon={<FavoriteIcon selected={selectedButton === "Favorites"} />}
          title="Favorites"
          selected={selectedButton === "Favorites"}
        />
      </div>
    </div>
  );
};

export default MenuBar;
