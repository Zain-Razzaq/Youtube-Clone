import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getVideosDataFromAPI } from "../apiEndPoints";
import { updateVideosData } from "../store/homePageReducer";
import {
  getViewsInFormat,
  getTimeInFormat,
  getDurationInFormat,
} from "../utils/utils";

import VideosCards from "../components/VideoCards";
import LayoutBase from "../components/LayoutBase";
import TagsBar from "../components/TagsBar";

const HomePage = () => {
  const dispatch = useDispatch();

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
    dispatch(updateVideosData(items.map(sliceRequiredData)));
  };

  useEffect(() => {
    getVideosDataForHomePage();
    return () => dispatch(updateVideosData([]));
  }, []);

  return (
    <LayoutBase>
      <TagsBar />
      <VideosCards />
    </LayoutBase>
  );
};

export default HomePage;
