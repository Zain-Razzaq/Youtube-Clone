import { useNavigate } from "react-router-dom";
import { getWatchPageURL } from "../../routes";

const SuggestedCard = ({
  id,
  image,
  title,
  channelName,
  views,
  time,
  duration,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-24 m-2">
      <div
        className=" w-40 cursor-pointer relative group"
        onClick={() => navigate(getWatchPageURL(id))}
      >
        <img
          className="max-h-full w-full object-cover rounded-lg"
          src={image}
          alt="thumbnail"
        />
        <span className="absolute bottom-1 right-1 p-0.5 bg-slate-950/75 rounded-md text-white text-xs group-hover:hidden">
          {duration}
        </span>
      </div>
      <div className="mx-2 w-3/5">
        <h3 className=" font-medium text-sm line-clamp-2 cursor-pointer">
          {title}
        </h3>
        <p className="text-slate-500 text-sm font-normal cursor-pointer">
          {channelName}
        </p>
        <p className="text-slate-500 text-sm font-normal">
          {views} views • {time} ago
        </p>
      </div>
    </div>
  );
};

export default SuggestedCard;
