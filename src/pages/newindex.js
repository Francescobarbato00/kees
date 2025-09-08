import AudienceSplitHero from "./components/AudienceSplitHero";
import ClientsShowcase from "./components/ClientsShowcase";
import ContactVideoForm from "./components/ContactVideoForm";

import FooterDark from "./components/FooterDark";
import HighlightsWithLogos from "./components/HighlightsWithLogos";
import LatestInsightsPro from "./components/LatestInsightsPro";
import NewHeader from "./components/NewHeader";
import NewHero from "./components/NewHero";
import OptimizeResults from "./components/OptimizeResults";
import PlantScrollShowcase from "./components/PlantScrollShowcase";
import SolutionsGrid from "./components/SolutionsGrid";
import SolutionsSpotlight from "./components/SolutionsSpotlight";

export default function NewIndex() {
  return (
    <>
     <NewHeader />
    <NewHero />
    <OptimizeResults />
    <SolutionsSpotlight />
    <HighlightsWithLogos />
    <AudienceSplitHero />
    <ClientsShowcase />
    <SolutionsGrid />
   <PlantScrollShowcase />
   <LatestInsightsPro />
 <ContactVideoForm />
   <FooterDark />
    </>
  );
}
