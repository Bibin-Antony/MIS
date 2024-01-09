import Button3 from "../../components/layouts/Button3";

const Schedule = () => {
  return (
    <div className="flex-col md:flex-row text-center py-10 bg-secondary text-white tracking-wide flex items-center justify-center gap-6 font-semibold ">
      <h4 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl">
        Schedule a visit at Mysore International School
      </h4>
      <Button3 title="Schedule a visit" />
    </div>
  );
};

export default Schedule;
