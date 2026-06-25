import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;