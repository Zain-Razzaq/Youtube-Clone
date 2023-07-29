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
    <div className="flex flex-col w-[32%] m-1">
      <div className="h-52 cursor-pointer ">
        <img
          className="max-h-full w-full object-cover rounded-lg"
          src={image}
          alt="thumbnail"
        />
      </div>
      <div className="flex my-2">
        <img
          className="w-10 h-10 rounded-full"
          src={channelImage}
          alt="profile"
          cursor-pointer
        />
        <div className="mx-1">
          <h3 className=" h-12 w-[345px] font-medium line-clamp-2 cursor-pointer">
            {title}
          </h3>
          <div className="text-slate-500 text-sm font-normal">
            <p className="cursor-pointer">{channelName}</p>
            <p>8.5M views 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
