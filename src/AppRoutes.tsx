import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;