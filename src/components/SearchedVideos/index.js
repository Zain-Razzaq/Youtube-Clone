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
        }) => (
          <SearchedVideoCard
            key={id}
            id={id}
            image={thumbnail}
            title={title}
            description={description}
            channelName={channelTitle}
            channelImage={thumbnail}
            time={timePassedSinceUpload}
          />
        )
      )}
    </div>
  );
};

export default SearchedVideos;
