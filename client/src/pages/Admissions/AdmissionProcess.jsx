

const AdmissionProcess = () => {
  return (
    <div className="bg-white p-6 sm:p-12 md:p-20 flex flex-col gap-5 items-start justify-center bg-[#d3d3d3] text-[#580b57]">
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-2xl">Admission Process</h2>
        <div className="flex flex-col items-start justify-center gap-3">
          <p>
            Admissions at Mysore international School is as per the following
            procedure.
          </p>
          <div className="flex flex-col items-start justify-center gap-2">
            <span>1. Filling Application Form @ Campus</span>
            <span>2. Attend Counselling @ Campus</span>
            <span>3. Confirmation of Admission</span>
            <ul className="ml-10 ">
              <li className="list-disc mt-1">Campus Tour</li>
              <li className="list-disc mt-1">Online Test</li>
              <li className="list-disc mt-1">Parents and Students Interaction</li>
            </ul>
            <span>4. Registration of Admission</span>
            <span>
              5. Congratulations! Your ward is in Mysore international school!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-2xl">
          Documents Required at the time of Admission
        </h2>
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col items-start justify-center gap-2">
            <span>1. Birth Certificate</span>
            <span>
              2. 2 copies of photographs of the parents and 4 passport size
              photos of child
            </span>
            <span>
              3. Fitness certificate and medical report for blood group, any
              allergies etc.
            </span>
            <span>
              4. Transfer certificate and marks card from previous school (
              Class 2 onwards)
            </span>
            <span>5. Aadhaar copy of parent and child Address proof</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-4">
          <h2 className="text-2xl">Eligibility : </h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <p>Age criteria for application of admission</p>
            <table className="w-full border-collapse border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Admission</th>
                  <th className="border p-2">Age by 31st May of the year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border p-2">Nursery</td>
                  <td className="border p-2">3 years</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">LKG</td>
                  <td className="border p-2">4 Years</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border p-2">UKG</td>
                  <td className="border p-2">5 Years</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">Grade 1</td>
                  <td className="border p-2">6 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdmissionProcess;
