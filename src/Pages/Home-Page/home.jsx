import "./home.css";
import Navbar from "../../components/Nav-Bar/navbar";
import FirstSection from "../../Sections/FirstSection/firstsection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FirstSection />
    </div>
  );
};

export default Home;
