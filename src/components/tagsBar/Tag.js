const Tag = ({ tagContent }) => {
  return (
    <button className="p-2 mx-1 text-sm rounded-lg bg-neutral-100 hover:bg-neutral-200">
      {tagContent}
    </button>
  );
};

export default Tag;
