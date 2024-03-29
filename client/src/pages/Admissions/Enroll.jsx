import Button5 from "../../components/layouts/Button5";

const Enroll = () => {
  return (
    <div className="p-4 lg:grid grid-cols-2 tracking-wide bg-secondary">
      <div className=" text-white space-y-6 p-4 ">
        <h5 className="text-2xl md:text-3xl lg:text-4xl">
          Communicate With Us
        </h5>
        <h2 className="capitalize text-xl md:text-2xl">How to enroll</h2>
        <p>
          Welcome to the enrollment gateway of Mysore International School—a
          place where educational journeys begin. We are thrilled to embark on
          this exciting adventure with you. Please complete the enrollment form
          below to initiate the enrollment process for your child.
        </p>
        <p>
          If you have any questions or need assistance during the enrollment
          process, our friendly admissions team is here to help. Feel free to
          reach out to us.
        </p>
      </div>
      <div className="text-textSecondary bg-white p-4 space-y-6 rounded-md">
        <h2 className="uppercase text-center font-semibold p-4 text-2xl">
          enrollment form
        </h2>
        <form
          action=""
          className="grid grid-cols-2 border lg:border-secondary border-none p-4 rounded-md"
        >
          <div className="col-span-full lg:col-span-1 flex flex-col lg:items-center justify-center gap-6 lg:p-3">
            <input
              type="text"
              placeholder="Parent's Name"
              className="p-2 outline-none rounded-sm w-full border-slate-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 outline-none rounded-sm w-full border-slate-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 outline-none rounded-sm w-full border-slate-400"
            />
          </div>
          <div className="col-span-full lg:col-span-1  mt-10 lg:m-0 lg:p-3">
            <textarea
              className="w-full p-2 rounded-sm outline-none border-slate-400"
              placeholder="Message"
              name=""
              id=""
              rows="6"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="col-span-full lg:ml-2">
            <Button5 title={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
