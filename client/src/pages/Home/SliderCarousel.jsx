import Slider from "../../components/layouts/Slider";
import image1 from "../../assets/Images/HomeImages/CarouselImages/children_outing.jpg"; // Adjust the path accordingly
import image2 from "../../assets/Images/HomeImages/CarouselImages/principle_and_children.jpg"; // Adjust the path accordingly
import image3 from "../../assets/Images/HomeImages/CarouselImages/children_kannada_rajostsava.jpg"; // Adjust the path accordingly

const slides = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
];

console.log(slides);

const SliderCarousel = () => {
  return (
    <div className="slider-container w-[100vw] h-[83vh]">
      <Slider slides={slides} />
    </div>
  );
};

export default SliderCarousel;
