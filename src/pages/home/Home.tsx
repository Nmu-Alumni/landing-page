import AboutNetwork from "../../components/pages/home-comps/about-network/AboutNetwork";
import CallToAction from "../../components/pages/home-comps/call-to-action/CallToAction";
import FeaturedAlumni from "../../components/pages/home-comps/featured-alumni/FeaturedAlumni";
import Hero from "../../components/pages/home-comps/hero/Hero";
import StatsBar from "../../components/pages/home-comps/stats-bar/StatsBar";
import UpcomingEvents from "../../components/pages/home-comps/upcoming-events/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsBar />
      <AboutNetwork />
      <FeaturedAlumni />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
};

export default Home;
