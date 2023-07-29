import MenuBar from "../components/menuBar/MenuBar";
import TagsBar from "../components/tagsBar/TagsBar";
import VideosCards from "../components/videoCards/VideosCards";

const HomePage = ({ collapse }) => {
  return (
    <div className="flex w-100">
      <div className={collapse ? "w-[6%]" : "w-[15%]"}>
        <MenuBar collapse={collapse} />
      </div>
      <div className="ml-2 w-[85%] flex flex-col">
        <div className="">
          <TagsBar />
        </div>
        <div>
          <VideosCards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
