// pages/index.js

import React from "react";

// SEZIONI DELLA PAGINA
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

// NUOVI COMPONENTI HEADER + SHEET
import NewHeader from "./components/NewHeader";
import ScheduleSheet from "./components/ScheduleSheet";
import Problems from "./components/Problem";
import HighlightsWithLogos from "./components/HighlightsWithLogos";
import LatestInsightsPro from "./components/LatestInsightsPro";
import ClientsShowcase from "./components/ClientsShowcase";
import SolutionsGrid from "./components/SolutionsGrid";

export default function Home() {
  return (
    <>
      {/* Header unico (sticky) */}
      <NewHeader />

      {/* Sezione Hero a tutta pagina */}
      <Hero />

      {/* Contenuti */}
      <WhyChooseUs />
     <HighlightsWithLogos />
     <ClientsShowcase/> 
       <SolutionsGrid />
       <Problems />
      <LatestInsightsPro />
      <ContactBanner />

      {/* Footer */}
      <Footer />

     
      <ScheduleSheet />
    </>
  );
}
