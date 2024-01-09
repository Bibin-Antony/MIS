import Footer from "../../components/layouts/Footer";
import AdmissionProcess from "./AdmissionProcess";
import Enroll from "./Enroll";
import Fee from "./Fee";
import RaiseATicket from "./RaiseATicket";
import ReasonToChoose from "./ReasonToChoose";

const Admissions = () => {
  return (
    <div className="w-full h-full mt-20">
      <Fee />
      <ReasonToChoose />
      <RaiseATicket />
      <AdmissionProcess />
      <Enroll />
      <Footer />
    </div>
  );
};

export default Admissions;
