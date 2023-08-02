import { useNavigate } from "react-router-dom";

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
      className="flex flex-col m-1 w-96"
      onClick={() => navigate(`/watch/${id}`)}
    >
      <div className="h-52 cursor-pointer relative group">
        <img
          className="max-h-full w-full object-cover rounded-lg"
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
