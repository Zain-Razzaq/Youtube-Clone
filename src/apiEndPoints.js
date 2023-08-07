import axios from "axios";

const getVideosDataFromAPI = () => {
  return axios
    .get("https://youtube.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet, statistics , contentDetails",
        chart: "mostPopular",
        maxResults: 30,
        regionCode: "PK",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getVideosDataForSearch = (query) => {
  return axios
    .get("https://youtube.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: query,
        maxResults: 30,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    })
    .catch((error) => console.log(error));
};

const getVidoesByCategory = (categoryID) => {
  return axios
    .get("https://youtube.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet, statistics , contentDetails",
        chart: "mostPopular",
        maxResults: 30,
        regionCode: "PK",
        videoCategoryId: categoryID,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getVideoById = (videoId) => {
  return axios
    .get("https://youtube.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet, statistics , contentDetails",
        maxResults: 30,
        regionCode: "PK",
        id: videoId,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    })
    .then((res) => res.data.items[0])
    .catch((error) => console.log(error));
};
export {
  getVideosDataFromAPI,
  getVideosDataForSearch,
  getVidoesByCategory,
  getVideoById,
};
