
import AimsObjectivesSection from "../../components/pages/about-comps/aims-objectives-section/AimsObjectivesSection";
import GovernanceStructureSection from "../../components/pages/about-comps/governance-structure-section/GovernanceStructureSection";
import MembershipCategoriesSection from "../../components/pages/about-comps/membership-categories-section/MembershipCategoriesSection";
import OurStorySection from "../../components/pages/about-comps/our-story-section/OurStorySection";
import WhoWeAreSection from "../../components/pages/about-comps/who-we-are-section/WhoWeAreSection";
import HeroSection from "../../components/ui/hero-section/HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About the Nigeria Maritime University Alumni Association"
        subtitle="The official alumni network of Nigeria's first dedicated maritime university — connecting graduates, advancing Nigeria's blue economy, and upholding our maritime legacy."
        iconColor="#C9A84C"
      />
      <WhoWeAreSection/>
      <OurStorySection/>
      <AimsObjectivesSection/>
      <MembershipCategoriesSection/>
      <GovernanceStructureSection/>
    </div>
  );
};

export default About;
