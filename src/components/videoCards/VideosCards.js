import { useSelector } from "react-redux";

import Card from "./Card";

const VideosCards = () => {
  const videosData = useSelector((state) => state.videosData);

  return (
    <div className="flex flex-wrap">
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
          <Card
            key={id}
            image={thumbnail}
            title={title}
            channelName={channelTitle}
            channelImage={thumbnail}
            views={viewCount}
            time={timePassedSinceUpload}
            duration={duration}
          />
        )
      )}
    </div>
  );
};

export default VideosCards;
