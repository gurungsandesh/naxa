import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/naxa.png";
import FooterCard from "./footerCard";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[2rem] md:w-[70vw] md:m-auto pb-20">
      <FooterCard />
      <div className="flex flex-col gap-y-[5rem] md:flex-row md:justify-between ">
        {/* grid */}
        <div className="flex flex-col items-center gap-[1rem] md:items-start ">
          <div className="cursor-pointer w-[90px] md:w-[150px]">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-semibold text-base ">Naxa Pvt Ltd.</span>
          <span className="text-gray-500">
            Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
          </span>
          <span className="text-gray-500">14516543</span>
          <span className="text-gray-500 underline cursor-pointer">
            info@naxa.com.np
          </span>
        </div>
        {/* grid */}
        <div>
          <div className="flex flex-col gap-[1rem] text-center md:items-start">
            <span className="font-semibold text-base cursor-pointer ">
              Services
            </span>
            <span className="font-semibold text-base cursor-pointer ">
              Portfolio
            </span>
            <span className="text-gray-500">General</span>
            <span className="text-gray-500">International</span>
          </div>
        </div>
        {/* grid */}
        <div className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-[1rem] text-center md:items-start">
            <span className="font-semibold text-base cursor-pointer ">
              Company
            </span>
            <span className="text-gray-500">About us</span>
            <span className="text-gray-500">Team</span>
            <span className="text-gray-500">Work with us</span>
            <span className="text-gray-500">Awards & Achievements</span>
          </div>

          <div className="flex flex-col gap-[1rem] text-center md:items-start">
            <span className="font-semibold text-base cursor-pointer ">
              Events & Media
            </span>
            <span className="text-gray-500">Events</span>
            <span className="text-gray-500">Media</span>
            <span className="text-gray-500">Publications</span>
            <span className="font-semibold text-base cursor-pointer ">
              Blog
            </span>
            <span className="font-semibold text-base cursor-pointer ">
              Contact
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] justify-center items-center md:flex-row  md:justify-between">
        <div className="flex gap-[1rem] text-darkyellow">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="text-gray-500 text-sm">
          © NAXA 2023. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
