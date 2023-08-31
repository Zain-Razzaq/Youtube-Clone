import { Route, Routes } from "react-router-dom";

import { HomePage, SearchPage, WatchPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchQuery" element={<SearchPage />} />
      <Route path="/watch/:videoId" element={<WatchPage />} />
    </Routes>
  );
};

export default AppRoutes;
