import Card from "./Card";

const VideosCards = () => {
  return (
    <div className="flex flex-wrap ">
      {/* dummy data is entered just for testing  */}
      <Card
        image="https://content.jwplatform.com/thumbs/AhG5YttF-720.jpg"
        title="The aspect ratio of an element describes the proportional relationship between its width and its height."
        channelName="Channel Name"
        channelImage="https://content.jwplatform.com/thumbs/AhG5YttF-720.jpg"
      />
    </div>
  );
};

export default VideosCards;
