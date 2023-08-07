import { useNavigate } from "react-router-dom";
import { getWatchPageURL } from "../../routes";

const SearchedVideoCard = ({
  id,
  image,
  title,
  description,
  channelName,
  channelImage,
  time,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-52  m-2 "
      onClick={() => navigate(getWatchPageURL(id))}
    >
      <div className=" w-96 cursor-pointer relative group">
        <img
          className="max-h-full w-full object-cover rounded-lg"
          src={image}
          alt="thumbnail"
        />
        <span className="absolute bottom-2 right-2 p-0.5 bg-slate-950/75 rounded-md text-white text-xs group-hover:hidden">
          {"02:34"}
        </span>
      </div>
      <div className="mx-2 w-[720px]">
        <h3 className=" font-medium text-lg line-clamp-2 cursor-pointer">
          {title}
        </h3>
        <p className="text-slate-500 text-sm font-normal">
          {"235K"} views • {time} ago
        </p>
        <div className="flex items-center gap-1 my-3">
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src={channelImage}
            alt="profile"
          />
          <p className="text-slate-500 text-sm font-normal cursor-pointer">
            {channelName}
          </p>
        </div>
        <p className="text-slate-500 text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
