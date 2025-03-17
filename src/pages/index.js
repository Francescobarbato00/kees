// pages/index.js

import AwardWinningServices from './components/AwardWinningServices';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import FundedCompaniesBanner from './components/FundedCompaniesBanner';
import Header from './components/Header'; // Header originale
import Hero from './components/Hero';
import LatestInsight from './components/LatestInsight';
import ScrollingLogos from './components/ScrollingLogos';
import TeamSection from './components/TeamSection';
import TeamShowcase from './components/TeamShowcase';
import WhyChooseUs from './components/WhyChooseUs';

// IMPORT DELLO STICKY HEADER
import StickyHeader from './components/StickyHeader';

export default function Home() {
  return (
    <>
      {/* Header originale (trasparente, in assoluto) */}
      <Header />

      {/* Header "sticky" che compare dopo lo scroll */}
      <StickyHeader />

      {/* Sezione Hero a tutta pagina */}
      <Hero />

      <WhyChooseUs />
      <ScrollingLogos />
      <TeamSection />
      <AwardWinningServices />
      <FundedCompaniesBanner />
      <TeamShowcase />
      <LatestInsight />
      <ContactBanner />
      <Footer />
      {/* Altri componenti o contenuti della pagina */}
    </>
  );
}
