import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import LayoutBase from "../components/LayoutBase";
import SuggestedVideos from "../components/SuggestedVideos/index";

import {
  updateSuggestedVideos,
  clearState,
} from "../store/suggestedVideosReducers/suggestedVideosReducers";

const WatchPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSuggestedVideos(videoId));
    return () => dispatch(clearState());
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
