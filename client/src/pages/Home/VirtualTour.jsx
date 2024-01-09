import Button1 from "../../components/layouts/Button1";
import scanMe from "../../assets/Images/HomeImages/undraw_Stripe_payments_re_chlm.png"; // Adjust the path accordingly

const VirtualTour = () => {
  return (
    <div className="p-6 text-textSecondary bg-primary space-y-8 md:space-y-0 md:grid grid-cols-2 lg:px-20 lg:py-28 border-t border-y-secondary">
      <div className="space-y-6 md:space-y-10  col-span-1">
        <div>
          <h2 className="text-3xl font-semibold md:text-3xl lg:text-5xl">
            Virtual School Tour
          </h2>
          <h5 className="text-[15px] md:text-[18px] lg:text-xl font-semibold">
            Your window to the exterior beauty and architectural grace of Mysore
            International School.
          </h5>
        </div>

        <p className="text-left md:text-justify">
          Unlock the doors to Mysore International School by scanning the QR
          code on the left. Immerse yourself in a virtual stroll around our
          campus, exploring the architecture, surroundings, and the unique charm
          of our school from the outside. Get a sneak peek into the world of
          learning that awaits within.
        </p>
        <Button1 title={"Know More"} />
      </div>
      <div className="md:flex items-center justify-center col-span-1">
        <img src={scanMe} alt="" className="w-1/2  md:w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
};

export default VirtualTour;
