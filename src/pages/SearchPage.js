import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import SearchedVideos from "../components/SearchedVideos";
import TagsBar from "../components/TagsBar";
import LayoutBase from "../components/LayoutBase/index";

import { getVideosDataForSearch } from "../apiEndPoints";
import { updateSearhedVideos } from "../store/searchPageReducers";
import { getTimeInFormat } from "../utils/utils";

const SearchPage = () => {
  const { searchQuery } = useParams();
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
  }) => {
    return {
      id: id.videoId || id.channelId || id.playlistId,
      title,
      description,
      channelTitle,
      channelId,
      timePassedSinceUpload: getTimeInFormat(publishedAt),
      thumbnail: thumbnails.high.url,
    };
  };

  const getVideosDataForHomePage = async () => {
    const {
      data: { items },
    } = await getVideosDataForSearch(searchQuery);
    dispatch(updateSearhedVideos(items.map(sliceRequiredData)));
  };

  useEffect(() => {
    getVideosDataForHomePage();
    return () => dispatch(updateSearhedVideos([]));
  }, []);

  return (
    <LayoutBase>
      <TagsBar />
      <SearchedVideos />
    </LayoutBase>
  );
};

export default SearchPage;
