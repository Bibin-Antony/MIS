import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const OurTeamCard = ({ name, education, position, quote, image }) => {
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-2 border border-slate-400 mx-auto  py-10 rounded-lg">
      <div className="col-span-1 ">
        <img src={image} alt="" className="w-[75%] mx-auto rounded-lg" />
      </div>
      <div className="col-span-1 space-y-10 px-10 md:px-0">
        <div className="space-y-1">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p className="font-semibold">{position}</p>
          <h3 className="font-semibold text-[15px]">{education}</h3>
        </div>
        <p className="italic opacity-80">&quot;{quote}&quot;</p>
        <div className="text-textSecondary ">
          <div className="flex gap-3 mt-3">
            <BsGlobe2 className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon"></BsGlobe2>
            <BsLinkedin className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon"></BsLinkedin>
            <FaInstagram className="text-4xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md instagram-icon"></FaInstagram>
            <Link to="https://www.facebook.com/mlzsmys/">
              <FaFacebook className="text-4xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md"></FaFacebook>
            </Link>

            <RiTwitterXLine className="text-4xl hover:cursor-pointer hover:bg-black transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md"></RiTwitterXLine>
            <Link to="">
              <BsYoutube className="text-4xl hover:cursor-pointer hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:text-white p-2 rounded-md"></BsYoutube>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
