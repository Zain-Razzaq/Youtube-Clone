import { useSelector } from "react-redux";

import SearchedVideoCard from "./SearchedVideoCard";
import Loader from "../../lib/Loader";
import { getSearchedVideosDataFromStore } from "../../store/searchPageReducers/selector";

const SearchedVideos = () => {
  const { data, isLoading } = useSelector(getSearchedVideosDataFromStore);

  return (
    <>
      {isLoading ? (
        <div className="mt-20 w-[85vw] flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="mt-14">
          {data.map(
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
      )}
    </>
  );
};

export default SearchedVideos;
