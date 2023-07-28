import { HomeIcon, ShortsIcon, SubscriptionsIcon } from "./components/icons";
import MenuItem from "./components/MenuItem";

const MenuBar = ({ collapse }) => {
  return (
    <div className={"p-2  divide-y h-screen overflow-scroll"}>
      <div className="my-2">
        <MenuItem
          icon={<HomeIcon selected />}
          title="Home"
          selected
          collapse={collapse}
        />
        <MenuItem icon={<ShortsIcon />} title="Shorts" collapse={collapse} />
        <MenuItem
          icon={<SubscriptionsIcon />}
          title="Subscriptions"
          collapse={collapse}
        />
      </div>
      <div>
        <MenuItem icon={<HomeIcon />} title="Home" collapse={collapse} />
      </div>
    </div>
  );
};

export default MenuBar;
