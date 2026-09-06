import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Events from "./pages/events/Events";
// import Leadership from "./pages/leadership/Leadership";
import NotFound from "./pages/not-found/NotFound";
import MembersPage from "./pages/members-page/MembersPage";
import MemberDetailPage from "./pages/member-detail-page/MemberDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/leadership" element={<Leadership />} /> */}
        <Route path="/leadership" element={<MembersPage />} />

        {/* Single member detail */}
        <Route path="/leadership/:id" element={<MemberDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
