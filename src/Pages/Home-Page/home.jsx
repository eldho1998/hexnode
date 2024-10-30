import "./home.css";
import Navbar from "../../components/Nav-Bar/navbar";
import FirstSection from "../../Sections/FirstSection/firstsection";
import SecondSection from "../../Sections/SecondSection/secondsection";
import ThirdSection from "../../Sections/ThirdSection/thirdsection";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
