import { useSelector } from "react-redux";

import SuggestedCard from "./SuggestedCard";

const SuggestedVideos = () => {
  const videosData = useSelector((state) => state.suggestedVideosData);

  return (
    <div>
      {videosData.map(
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
      )}
    </div>
  );
};

export default SuggestedVideos;
