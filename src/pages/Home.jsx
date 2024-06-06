import AboutUs from "../components/homeComponents/AboutUs";
import Carousel from "../components/homeComponents/Carousel";
import CompanyIntroduction from "../components/homeComponents/CompanyIntroduction";
import FeaturedProducts from "../components/homeComponents/FeaturedProducts";
import OurProcess from "../components/homeComponents/OurProcess";
import StayWithUs from "../components/homeComponents/StayWithUs";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <FeaturedProducts />
      <OurProcess />
      <CompanyIntroduction />
      <StayWithUs />
    </div>
  );
};

export default Home;
