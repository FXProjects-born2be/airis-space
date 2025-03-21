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

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhatIs />
      <AirisInAction />
      <HomeBenefits />
      <ProvenResults />
      <HomeHow />

      <WhatBusinessSay />
      <HomePrivacy />
      <ContactUs image="/images/home/contact.png" />
    </>
  );
}
