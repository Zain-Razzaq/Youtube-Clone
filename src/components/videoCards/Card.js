const Card = ({
  image,
  title,
  channelName,
  channelImage,
  views,
  time,
  duration,
}) => {
  return (
    <div className="flex flex-col m-1 w-96">
      <div className="h-52 cursor-pointer ">
        <img
          className="max-h-full w-full object-cover rounded-lg"
          src={image}
          alt="thumbnail"
        />
      </div>
      <div className="flex my-2 ">
        <div className="w-1/5">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={channelImage}
            alt="profile"
          />
        </div>
        <div className="mx-1">
          <h3 className=" font-medium line-clamp-2 cursor-pointer">{title}</h3>
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
