const getRootNavigator = () => {
  return "/";
};

const getSearchNavigator = (searchQuery) => {
  return `/search/${searchQuery}`;
};

const getWatchNavigator = (videoId) => {
  return `/watch/${videoId}`;
};

export { getRootNavigator, getSearchNavigator, getWatchNavigator };
