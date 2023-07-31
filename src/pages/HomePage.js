import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import MenuBar from "../components/menuBar/MenuBar";
import TagsBar from "../components/tagsBar/TagsBar";
import VideosCards from "../components/videoCards/VideosCards";
import { getVideosDataFromAPI } from "../apiEndPoints";
import { updateVideosData } from "../store/reducer";
import {
  getViewsInFormat,
  getTimeInFormat,
  getDurationInFormat,
} from "../utils/utils";
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
      timePassedSinceUpload: getTimeInFormat(publishedAt),
      thumbnail: thumbnails.standard.url,
      duration: getDurationInFormat(duration),
      viewCount: getViewsInFormat(viewCount),
    };
  };

  const getVideosDataForHomePage = async () => {
    const { items } = await getVideosDataFromAPI();
    dispatch(updateVideosData(items.map((item) => sliceRequiredData(item))));
  };

  useEffect(() => {
    getVideosDataForHomePage();
  }, []);

  return (
    <div className="flex w-full">
      <div>
        <MenuBar />
      </div>
      <div className={`ml-2 flex flex-col ${collapse ? "w-[94%]" : "w-[83%]"}`}>
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
