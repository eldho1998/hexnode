import './home.css';
import Navbar from '../../components/Nav-Bar/navbar';
import FirstSection from '../../Sections/FirstSection/firstsection';
import SecondSection from '../../Sections/SecondSection/secondsection';
import WhyHexnode from '../../Sections/WhyHexnode/whyHexnode';
import Features from '../../Sections/Features/features';
import Platform from '../../Sections/Platforms/platforms';
import Customer from '../../Sections/CustomerSays/customer';
import Footers from '../../components/Footers/footers';

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
      <Footers />
    </div>
  );
};

export default Home;
