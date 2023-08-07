import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import WatchPage from "./pages/WatchPage";

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
