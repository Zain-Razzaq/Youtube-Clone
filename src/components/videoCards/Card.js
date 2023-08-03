import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removerFromFavorites,
} from "../../store/favoriteVideosReducers";

const Card = ({
  id,
  image,
  title,
  channelName,
  channelImage,
  views,
  time,
  duration,
  favorite,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelClickOnLikeButton = () => {
    if (favorite) {
      dispatch(removerFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div className="flex flex-col m-1 w-96">
      <div className="h-52 cursor-pointer group relative overflow-hidden">
        <img
          className="max-h-full w-full object-cover rounded-lg "
          src={image}
          alt="thumbnail"
        />
        <div className="h-full w-full flex items-center justify-center  bg-slate-500/50 z-10 absolute -bottom-full group-hover:bottom-0 transition-all ">
          <svg
            fill={favorite ? "rgb(215,34,34)" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-red-600"
            onClick={() => handelClickOnLikeButton()}
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <span className="absolute bottom-2 right-2 p-0.5 bg-slate-950/75 rounded-md text-white text-xs group-hover:hidden">
          {duration}
        </span>
      </div>
      <div className="flex my-2" onClick={() => navigate(`/watch/${id}`)}>
        <div className="w-12">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={channelImage}
            alt="profile"
          />
        </div>
        <div className="mx-1">
          <h3 className="w-80 font-medium line-clamp-2 cursor-pointer">
            {title}
          </h3>
          <div className="text-slate-500 text-sm font-normal">
            <p className="cursor-pointer">{channelName}</p>
            <p>
              {views} views • {time} ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
