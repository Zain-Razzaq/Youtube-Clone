import { useSelector } from "react-redux";

import SuggestedCard from "./SuggestedCard";
import Loader from "../../lib/Loader";
import { getSuggestedVideosDataFromStore } from "../../store/suggestedVideosReducers/selector";

const SuggestedVideos = () => {
  const { data, isLoading } = useSelector(getSuggestedVideosDataFromStore);

  return (
    <div className="felx felx-col">
      {isLoading ? (
        <div className="w-[20vw] mt-6 flex justify-center">
          <Loader />
        </div>
      ) : (
        data.map(
          ({
            id,
            title,
            channelTitle,
            timePassedSinceUpload,
            thumbnail,
            viewCount,
            duration,
          }) => (
            <SuggestedCard
              key={id}
              id={id}
              image={thumbnail}
              title={title}
              channelName={channelTitle}
              views={viewCount}
              time={timePassedSinceUpload}
              duration={duration}
            />
          )
        )
      )}
    </div>
  );
};

export default SuggestedVideos;
