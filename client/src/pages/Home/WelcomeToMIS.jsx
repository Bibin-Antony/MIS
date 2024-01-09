import Button1 from "../../components/layouts/Button1";
import logo from "../../assets/Images/LogoAndOthers/logo-2-v2.png"; // Adjust the path accordingly

const WelcomeToMIS = () => {
  return (
    <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid grid-cols-2 tracking-wide">
      <div className="space-y-10 col-span-1">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl">
            Welcome to <span style={{ fontFamily: "myfont" }}>MIS</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl">
            Empower. Excel. Educate
          </h3>
        </div>

        <p className="md:text-justify ">
          Welcome to Mysore International School, a place where every student's
          journey is crafted with care and purpose. Here, education goes beyond
          textbooks, shaping young minds into confident, curious learners. Our
          vibrant community of educators and students fosters an environment of
          collaboration and growth. As you embark on this educational adventure
          with us, you'll discover not just a school but a supportive family,
          dedicated to unlocking the full potential of each individual.
        </p>
        <Button1 title={"Enroll Today"} />
      </div>
      <div className="col-span-1 md:flex items-center justify-start">
        <img src={logo} alt="" className="w-1/2 mx-auto" />
      </div>
    </div>
  );
};

export default WelcomeToMIS;
