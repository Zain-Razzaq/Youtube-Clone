import Tag from "./Tag";

// These are here temporarily. We'll get them from the database later.
const TAGS = [
  "All",
  "Music",
  "Game Shows",
  "Computer Programming",
  "Dramas",
  "Driving",
  "Debates",
  "Movies",
  "JavaScript",
  "Card Games",
  "Cricket",
  "Database",
  "store",
  "Breaking News",
  "Messi",
  "Popular Songs",
  "Sports",
  "Magic",
];

const TagsBar = () => {
  return (
    <div className=" whitespace-nowrap z-10 p-2 bg-white fixed w-full flex items-center justify-between overflow-scroll  no-scrollbar ">
      {TAGS.map((tag) => (
        <Tag key={tag} tagContent={tag} />
      ))}
    </div>
  );
};

export default TagsBar;
