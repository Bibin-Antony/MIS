import Footer from "../../components/layouts/Footer";
import GetInTouch from "./GetInTouch";
import NewsAndEvents from "./NewsAndEvents";
import ReasonToPursue from "./ReasonToPursue";
import Schedule from "./Schedule";
import SliderCarousel from "./SliderCarousel";
import VirtualTour from "./VirtualTour";
import WelcomeToMIS from "./WelcomeToMIS";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <div className="w-full h-full mt-[5rem]">
      <SliderCarousel />
      <WelcomeToMIS />
      <WhoWeAre />
      <VirtualTour />
      <ReasonToPursue />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
