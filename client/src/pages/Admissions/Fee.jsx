import image from "../../assets/Images/AdmissionsImages/PaymentBG.png"; // Adjust the path accordingly
import Button1 from "../../components/layouts/Button1";

const Fee = () => {
  return (
    <div className="bg-secondary text-white px-4 py-8 tracking-wide space-y-14 md:space-y-0 md:grid grid-cols-2 md:p-10 md:py-36">
      <div className="space-y-4 md:space-y-8 ">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Online Fee Payment
        </h2>
        <h5 className="text-[13px] md:text-[16px] font-semibold">
          At Mysore International School, we believe in simplifying the school
          experience for parents. Opting for our secure Online Fees Payments not
          only streamlines the process but also brings a host of benefits to
          your fingertips.
        </h5>
        <Button1 title={"Pay Now"} />
      </div>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className="w-[80%] md:w-1/2" />
      </div>
    </div>
  );
};

export default Fee;
