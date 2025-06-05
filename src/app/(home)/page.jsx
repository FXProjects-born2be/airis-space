import "@/styles/home.scss";
import HomeHero from "./components/HomeHero";
import HomeWhatIs from "./components/HomeWhatIs";
import HomeBenefits from "./components/HomeBenefits";
import HomeHow from "./components/HomeHow";
import HomePrivacy from "./components/HomePrivacy";
import ContactUs from "@/components/ContactUs";
import ProvenResults from "./components/ProvenResults";
import WhatBusinessSay from "./components/WhatBusinessSay";
import AirisInAction from "./components/AirisInAction";
import Footer from "@/components/Footer";
import AirisInHeadlines from "./components/AirisInHeadlines";

export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeWhatIs />
      <AirisInAction />
      <HomeBenefits />
      <ProvenResults />
      <HomeHow />

      <WhatBusinessSay />
      <AirisInHeadlines />
      <HomePrivacy />
      <ContactUs image="/images/home/contact.png" />
      <Footer />
    </main>
  );
}
