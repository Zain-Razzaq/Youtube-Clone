import { useContext } from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import { SelectedButtonContext } from "../../App";
import Loader from "../../lib/Loader";
import { videosDataSelector } from "../../store/homePage/selector";
import { favoriteVideosDataSelector } from "../../store/favoriteVideos/selector";
import { FAVORITE_BUTTON } from "../MenuBar/constants";

const VideosCards = () => {
  const [selectedButton] = useContext(SelectedButtonContext);

  let { data, isLoading } = useSelector(videosDataSelector);
  const favoriteVideos = useSelector(favoriteVideosDataSelector);
  if (selectedButton === FAVORITE_BUTTON) {
    data = data.filter(({ id }) => favoriteVideos.includes(id));
  }

  return (
    <div className="mt-14 mx-3">
      {isLoading ? (
        <div className="flex justify-center mt-20 ">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap flex-1">
            {data.map(
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
                  id={id}
                  image={thumbnail}
                  title={title}
                  channelName={channelTitle}
                  channelImage={thumbnail}
                  views={viewCount}
                  time={timePassedSinceUpload}
                  duration={duration}
                  favorite={favoriteVideos.includes(id)}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default VideosCards;
