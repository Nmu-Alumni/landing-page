import BoardOfTrustees from "../../components/pages/leadership-comps/board-of-trustees/BoardOfTrustees";
import DirectorsSection from "../../components/pages/leadership-comps/directors-section/DirectorsSection";
import ElectionsConstitution from "../../components/pages/leadership-comps/elections-constitution/ElectionsConstitution";
import GovernanceSection from "../../components/pages/leadership-comps/governance-section/GovernanceSection";
import NalecoTribunal from "../../components/pages/leadership-comps/naleco-tribunal/NalecoTribunal";
import NationalExecutiveCouncil from "../../components/pages/leadership-comps/national-executive-council/NationalExecutiveCouncil";
import PresidentialRotation from "../../components/pages/leadership-comps/presidential-rotation/PresidentialRotation";
import ProvostRepresentatives from "../../components/pages/leadership-comps/provost-representatives/ProvostRepresentatives";
import HeroSection from "../../components/ui/hero-section/HeroSection";

const Leadership = () => {
  return (
    <div>
      <HeroSection
        title="Our Current Leadership"
        subtitle="Meet the elected officers, trustees, and independent organs governing the Nigeria Maritime University Alumni Association — serving the 2026–2028 term."
        iconColor="#C9A84C"
      />
      <GovernanceSection />
      <BoardOfTrustees />
      <NationalExecutiveCouncil />
      <DirectorsSection />
      <ProvostRepresentatives />
      <NalecoTribunal />
      <PresidentialRotation />
      <ElectionsConstitution />
    </div>
  );
};

export default Leadership;
