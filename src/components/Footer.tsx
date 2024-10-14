import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FaHome } from "react-icons/fa";
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from "react-icons/md";

const Footer = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="flex justify-evenly bg-[#131313] p-3 rounded-full">
      <Link
        to="/"
        className={`flex items-center justify-center transition  w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
      >
        <FaHome size={16} />
      </Link>
      <Link
        to="/firstyear"
        className={`flex items-center justify-center transition  w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/firstyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
      >
        <MdLooksOne size={16} />
      </Link>
      <Link
        to="/secoundyear"
        className={`flex items-center justify-center transition  w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/secoundyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
      >
        <MdLooksTwo size={16} />
      </Link>
      <Link
        to="/thirdyear"
        className={`flex items-center justify-center transition  w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/thirdyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
      >
        <MdLooks3 size={16} />
      </Link>
      <Link
        to="/fourthyear"
        className={`flex items-center justify-center transition  w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/fourthyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
      >
        <MdLooks4 size={16} />
      </Link>
    </div>
  );
};

export default Footer;
