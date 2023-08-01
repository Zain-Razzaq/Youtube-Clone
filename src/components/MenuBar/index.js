import { HomeIcon, ShortsIcon, SubscriptionsIcon } from "./icons";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  return (
    <div className="p-2 mt-16 divide-y h-screen overflow-scroll fixed">
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
