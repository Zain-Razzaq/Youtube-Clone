import Tag from "./Tag";

// These are here temporarily. We'll get them from the database later.
const TAGS = [
  "All",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "CSS",
  "HTML",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "GraphQL",
  "PostgreSQL",
  "SQL",
  "Python",
  "Django",
  "Flask",
  "Java",
  "C",
  "C++",
  "Ruby",
  "Ruby on Rails",
  "Git",
  "GitHub",
  "GitLab",
];

const TagsBar = () => {
  return (
    <div>
      <div className=" whitespace-nowrap z-10 p-2 bg-white fixed w-[82%] flex items-center justify-between overflow-scroll  no-scrollbar ">
        {TAGS.map((tag) => (
          <Tag key={tag} tagContent={tag} />
        ))}
      </div>
    </div>
  );
};

export default TagsBar;
