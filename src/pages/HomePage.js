import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useContext } from "react";

import MenuBar from "../components/menuBar/MenuBar";
import TagsBar from "../components/tagsBar/TagsBar";
import VideosCards from "../components/videoCards/VideosCards";
import { getVideosData } from "../apiEndPoints";
import { addVideosData } from "../store/reducer";
import { convertNumberOfViews, timePassedByNow } from "../utils/utils";
import { collapseContext } from "../App";

const HomePage = () => {
  const dispatch = useDispatch();
  const [collapse] = useContext(collapseContext);

  const sliceRequiredData = ({
    id,
    snippet: { title, channelId, channelTitle, publishedAt, thumbnails },
    contentDetails: { duration },
    statistics: { viewCount },
  }) => {
    return {
      id,
      title,
      channelTitle,
      channelId,
      publishedAt: timePassedByNow(publishedAt),
      thumbnail: thumbnails.standard.url,
      duration,
      viewCount: convertNumberOfViews(viewCount),
    };
  };

  const getVideosDataForHomePage = async () => {
    const { items } = await getVideosData();
    dispatch(addVideosData(items.map((item) => sliceRequiredData(item))));
  };

  useEffect(() => {
    getVideosDataForHomePage();
  }, []);

  return (
    <div className="flex w-full">
      <div>
        <MenuBar />
      </div>
      <div className={`ml-2 flex flex-col ${collapse ? "w-[94%]" : "w-[85%]"}`}>
        <div>
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
