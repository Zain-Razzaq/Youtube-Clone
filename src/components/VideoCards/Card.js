import { useNavigate } from "react-router-dom";

import { getWatchPageURL } from "../../routes";

const Card = ({
  id,
  image,
  title,
  channelName,
  channelImage,
  views,
  time,
  duration,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col lg:flex-[1_1_24%] sm:flex-[1_1_49%]  m-1"
      onClick={() => navigate(getWatchPageURL(id))}
    >
      <div className="h-52 cursor-pointer group relative overflow-hidden">
        <img
          className="max-h-full w-full object-cover rounded-lg "
          src={image}
          alt="thumbnail"
        />
        <span className="absolute bottom-2 right-2 p-0.5 bg-slate-950/75 rounded-md text-white text-xs group-hover:hidden">
          {duration}
        </span>
      </div>
      <div className="flex my-2">
        <div className="w-12">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={channelImage}
            alt="profile"
          />
        </div>
        <div className="mx-1">
          <h3 className="max-w-sm  font-medium line-clamp-2 cursor-pointer">
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
