const getRootURL = () => {
  return "/";
};

const getSearchPageURL = (searchQuery) => {
  return `/search/${searchQuery}`;
};

const getWatchPageURL = (videoId) => {
  return `/watch/${videoId}`;
};

export { getRootURL, getSearchPageURL, getWatchPageURL };
