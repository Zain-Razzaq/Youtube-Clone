import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearState, updateVideosData } from "../store/homePageReducer/homePageReducer";

import VideosCards from "../components/VideoCards";
import LayoutBase from "../components/LayoutBase";
import TagsBar from "../components/TagsBar";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateVideosData());
    return () => dispatch(clearState());
  }, []);

  return (
    <LayoutBase>
      <TagsBar />
      <VideosCards />
    </LayoutBase>
  );
};

export default HomePage;
