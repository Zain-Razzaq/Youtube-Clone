import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import LayoutBase from "../components/LayoutBase";
import SuggestedVideos from "../components/SuggestedVideos/index";

import { getVidoesByCategory, getVideoById } from "../apiEndPoints";
import {
  getTimeInFormat,
  getDurationInFormat,
  getViewsInFormat,
} from "../utils/utils";
import { updateSuggestedVideos } from "../store/suggestedVideosReducers";

const WatchPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();

  const sliceRequiredData = ({
    id,
    snippet: { title, channelTitle, publishedAt, thumbnails },
    contentDetails: { duration },
    statistics: { viewCount },
  }) => {
    return {
      id,
      title,
      channelTitle,
      timePassedSinceUpload: getTimeInFormat(publishedAt),
      thumbnail: thumbnails.standard.url,
      duration: getDurationInFormat(duration),
      viewCount: getViewsInFormat(viewCount),
    };
  };
  const getSuggestedVideosFromAPI = async () => {
    const videoData = await getVideoById(videoId);
    const data = await getVidoesByCategory(videoData.snippet.categoryId);
    data && dispatch(updateSuggestedVideos(data.items.map(sliceRequiredData)));
  };

  useEffect(() => {
    getSuggestedVideosFromAPI();
    return () => dispatch(updateSuggestedVideos([]));
  }, [videoId]);

  return (
    <LayoutBase>
      <div className="flex">
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="video"
            width="900"
            height="600"
            allowFullScreen
          />
        </div>
        <SuggestedVideos />
      </div>
    </LayoutBase>
  );
};

export default WatchPage;
