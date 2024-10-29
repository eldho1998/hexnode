import './home.css';
import Navbar from '../../components/Nav-Bar/navbar';
import FirstSection from '../../Sections/FirstSection/firstsection';
import SecondSection from '../../Sections/SecondSection/secondsection';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Home;
