import Footer from "../../components/layouts/Footer";
import Marquee from "../Academics/Marquee";
import AdmissionProcess from "./AdmissionProcess";
import Enroll from "./Enroll";
import Fee from "./Fee";
import RaiseATicket from "./RaiseATicket";
import ReasonToChoose from "./ReasonToChoose";
import PaperTear from "./PaperTear";
import PaperTear2 from "./PaperTear2";

const Admissions = () => {
  return (
    <div className="w-full h-full mt-20">
      <Fee />
      <ReasonToChoose />
      <RaiseATicket />
      <AdmissionProcess />
      <Enroll />
<<<<<<< HEAD
      <PaperTear />
      <Marquee />
      <PaperTear2 />
=======
      <Marquee />
>>>>>>> b4beb81d44eb4e02b6692f5b6fea75c2ae8f44c7
      <Footer />
    </div>
  );
};

export default Admissions;
