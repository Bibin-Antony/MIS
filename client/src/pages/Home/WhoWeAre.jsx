import logo from "../../assets/Images/HomeImages/Children.jpg"; // Adjust the path accordingly
import Button1 from "../../components/layouts/Button1";

const WhoWeAre = () => {
  return (
    <div className="p-6 space-y-6 md:space-y-0 text-textSecondary md:grid md:grid-cols-2 gap-6 lg:gap-20 lg:px-20 lg:py-20 bg-primary tracking-wide">
      <div className="col-span-1 md:flex items-center justify-center">
        <img src={logo} alt="" className="rounded-md" />
      </div>
      <div className="space-y-3 md:space-y-6 col-span-1">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Who We Are?
          </h2>
          <h5 className="text-[15px] md:text-[17px] lg:text-xl  font-semibold text-left md:text-justify">
            At Mysore International School, we are a vibrant community dedicated
            to fostering academic excellence and holistic development.
          </h5>
        </div>
        <p className="text-left md:text-justify">
          At the heart of Mysore International School is a belief in the
          transformative power of education. Our approach is unique, focusing
          not only on imparting knowledge but also on nurturing essential life
          skills. We are a close-knit community that values collaboration,
          diversity, and personal growth. As we embrace a future-driven
          perspective, our students are not just prepared for exams but equipped
          for life's challenges.
        </p>
        <Button1 title={"Know More"} />
      </div>
    </div>
  );
};

export default WhoWeAre;
