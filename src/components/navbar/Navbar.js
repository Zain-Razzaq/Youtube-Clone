import "./Navbar.css";
import {
  CreateVideoIcon,
  MenuButton,
  MicrophoneIcon,
  YoutubeIcon,
  NotificationIcon,
  ProfileIcon,
} from "./components/icons";
import SearchBar from "./components/SearchBar";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-5">
      <div className="flex items-center my-3">
        <button className="nav-icon">
          <MenuButton />
        </button>
        <div className="flex items-center cursor-pointer">
          <YoutubeIcon />
          <span className="text-gray-500 text-xs mb-4">PK</span>
        </div>
      </div>
      <div className="lg:w-[650px] md:w-[400] flex justify-end items-center">
        <SearchBar />
        <div className="nav-icon bg-neutral-100 ">
          <MicrophoneIcon />
        </div>
      </div>
      <div className="flex">
        <button className="nav-icon">
          <CreateVideoIcon />
        </button>
        <button className="nav-icon">
          <NotificationIcon />
        </button>
        <button className="nav-icon">
          <ProfileIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
