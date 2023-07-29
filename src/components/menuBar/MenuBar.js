import { HomeIcon, ShortsIcon, SubscriptionsIcon } from "./components/icons";
import MenuItem from "./components/MenuItem";

const MenuBar = () => {
  return (
    <div className={`p-2 divide-y h-screen overflow-scroll `}>
      <div className="my-2">
        <MenuItem icon={<HomeIcon selected />} title="Home" selected />
        <MenuItem icon={<ShortsIcon />} title="Shorts" />
        <MenuItem icon={<SubscriptionsIcon />} title="Subscriptions" />
      </div>
      <div>
        <MenuItem icon={<HomeIcon />} title="Home" />
      </div>
    </div>
  );
};

export default MenuBar;
