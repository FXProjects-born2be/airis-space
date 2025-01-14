import "@/styles/home.scss";
import HomeHero from "./components/HomeHero";
import HomeWhatIs from "./components/HomeWhatIs";
import HomeBenefits from "./components/HomeBenefits";
import HomeHow from "./components/HomeHow";
import HomePrivacy from "./components/HomePrivacy";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhatIs />
      <HomeBenefits />
      <HomeHow />
      <HomePrivacy />
      <ContactUs />
    </>
  );
}
