import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Images/LogoAndOthers/MIS_Main_logo.png"; // Adjust the path accordingly

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className="sticky z-10 top-0 left-0 bg-primary p-5 text-textSecondary md:relative w-full">
      {!show ? (
        <RxHamburgerMenu
          onClick={toggleNavbar}
          className="text-2xl hover:shadow-cyan-500 block lg:hidden"
        />
      ) : (
        <GrClose
          onClick={toggleNavbar}
          className="text-2xl hover:shadow-cyan-500 block lg:hidden"
        />
      )}

      <ul
        className={` font-semibold block z-10 bg-primary lg:hidden absolute top-[4rem] w-[100vw] h-screen space-y-14 text-center transition-all duration-300 ${
          !show ? "left-[-100%]" : "left-0"
        }`}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"admissions"}>Admissions</Link>
        </li>
        <li>
          <Link to={"academics"}>Academics</Link>
        </li>
        <li>
          <Link to={"our-team"}>Our Team</Link>
        </li>
        <li>
          <Link to={"about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={"contact-us"}>Contact Us</Link>
        </li>
      </ul>

      <ul className="hidden bg-primary lg:flex p-4 z-10 fixed top-0 left-0 items-center justify-around font-semibold tracking-wider w-full">
        <li>
          <Link
            to={"/"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"admissions"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Admissions
          </Link>
        </li>
        <li>
          <Link
            to={"academics"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Academics
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <img src={logo} className="w-[15rem]" alt="" />
          </Link>
        </li>
        <li>
          <Link
            to={"our-team"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            to={"about-us"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact-us"
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
