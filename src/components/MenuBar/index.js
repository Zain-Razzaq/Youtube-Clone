import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { HomeIcon, ShortsIcon, SubscriptionsIcon, FavoriteIcon } from "./icons";
import MenuItem from "./MenuItem";
import { SelectedButtonContext } from "../../App";
import { getRootURL } from "../../routes";
import { FAVORITE_BUTTON, HOME_BUTTON } from "./constants";

const MenuBar = () => {
  const [selectedButton, setSelectedButton] = useContext(SelectedButtonContext);
  const navigate = useNavigate();

  const handelClickOnButton = (button) => {
    setSelectedButton(button);
    navigate(getRootURL());
  };

  return (
    <div className="p-2 mt-16 bg-white divide-y h-screen overflow-scroll fixed">
      <div className="my-2">
        <div onClick={() => handelClickOnButton(HOME_BUTTON)}>
          <MenuItem
            icon={<HomeIcon selected={selectedButton === HOME_BUTTON} />}
            title={HOME_BUTTON}
            selected={selectedButton === HOME_BUTTON}
          />
        </div>
        <MenuItem icon={<ShortsIcon />} title="Shorts" />
        <MenuItem icon={<SubscriptionsIcon />} title="Subscriptions" />
      </div>
      <div onClick={() => handelClickOnButton(FAVORITE_BUTTON)}>
        <MenuItem
          icon={<FavoriteIcon selected={selectedButton === FAVORITE_BUTTON} />}
          title={FAVORITE_BUTTON}
          selected={selectedButton === FAVORITE_BUTTON}
        />
      </div>
    </div>
  );
};

export default MenuBar;
