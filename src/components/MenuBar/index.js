import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { HomeIcon, ShortsIcon, SubscriptionsIcon, FavoriteIcon } from "./icons";
import MenuItem from "./MenuItem";
import { SelectedButtonContext } from "../../App";

const MenuBar = () => {
  const [selectedButton, setSelectedButton] = useContext(SelectedButtonContext);
  const navigate = useNavigate();

  const handelClickOnHomeButton = () => {
    setSelectedButton("Home");
    navigate("/");
  };
  const handelClickOnFavoriteButton = () => {
    setSelectedButton("Favorites");
    navigate("/");
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
