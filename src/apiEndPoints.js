import axios from "axios";

const getVideosDataFromAPI = () => {
  return axios
    .get("https://youtube.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet, statistics , contentDetails",
        chart: "mostPopular",
        maxResults: 30,
        regionCode: "US",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    })
    .then((res) => res.data);
};

export { getVideosDataFromAPI };
