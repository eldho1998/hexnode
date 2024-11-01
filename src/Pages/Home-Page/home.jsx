import "./home.css";
import Navbar from "../../components/Nav-Bar/navbar";
import FirstSection from "../../Sections/FirstSection/firstsection";
import SecondSection from "../../Sections/SecondSection/secondsection";
import WhyHexnode from "../../Sections/WhyHexnode/whyHexnode";
import Features from "../../Sections/Features/features";
import Platform from "../../Sections/Platforms/platforms";
import Customer from "../../Sections/CustomerSays/customer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <WhyHexnode />
      <Features />
      <Platform />
      <Customer />
    </div>
  );
};

export default Home;
