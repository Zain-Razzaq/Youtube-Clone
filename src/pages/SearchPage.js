import { useEffect } from "react";
import { useDispatch } from "react-redux";

import SearchedVideos from "../components/SearchedVideos";
import TagsBar from "../components/TagsBar";
import LayoutBase from "../components/LayoutBase/index";

import { getVideosDataFromAPI } from "../apiEndPoints";
import { updateVideosData } from "../store/reducer";
import {
  getViewsInFormat,
  getTimeInFormat,
  getDurationInFormat,
} from "../utils/utils";

const SearchPage = () => {
  const dispatch = useDispatch();
  const sliceRequiredData = ({
    id,
    snippet: {
      title,
      description,
      channelId,
      channelTitle,
      publishedAt,
      thumbnails,
    },
    contentDetails: { duration },
    statistics: { viewCount },
  }) => {
    return {
      id,
      title,
      description,
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
    <LayoutBase>
      <TagsBar />
      <SearchedVideos />
    </LayoutBase>
  );
};

export default SearchPage;
