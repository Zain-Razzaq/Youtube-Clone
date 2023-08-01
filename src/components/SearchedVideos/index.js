import { useSelector } from "react-redux";

import SearchedVideoCard from "./SearchedVideoCard";

const SearchedVideos = () => {
  const videosData = useSelector((state) => state.searchedVideosData);

  return (
    <div className="mt-14">
      {videosData.map(
        ({
          id,
          title,
          description,
          channelTitle,
          timePassedSinceUpload,
          thumbnail,
          viewCount,
          duration,
        }) => (
          <SearchedVideoCard
            key={id}
            image={thumbnail}
            title={title}
            description={description}
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

export default SearchedVideos;
