import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from "react-icons/md";

const Footer = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="fixed bottom-0 w-full bg-[#131313] p-3 flex justify-evenly rounded-full shadow-lg">
      <Link
        to="/"
        className={`cursor-pointer flex items-center justify-center transition w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
        aria-label="Homepage"
      >
        <FaHome size={16} />
      </Link>
      <Link
        to="/firstyear"
        className={`cursor-pointer flex items-center justify-center transition w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/firstyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
        aria-label="first year"
      >
        <MdLooksOne size={16} />
      </Link>
      <Link
        to="/secoundyear"
        className={`cursor-pointer flex items-center justify-center transition w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/secoundyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
        aria-label="secound year"
      >
        <MdLooksTwo size={16} />
      </Link>
      <Link
        to="/thirdyear"
        className={`cursor-pointer flex items-center justify-center transition w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/thirdyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
        aria-label="third year"
      >
        <MdLooks3 size={16} />
      </Link>
      <Link
        to="/fourthyear"
        className={`cursor-pointer flex items-center justify-center transition w-12 h-12 rounded-full p-2 shadow-lg ${
          location.pathname === "/fourthyear"
            ? "bg-[#FEE68C] text-[#000]"
            : "bg-[#1A1A1A] text-[#FFFFFF]"
        }`}
        aria-label="fourt year"
      >
        <MdLooks4 size={16} />
      </Link>
    </div>
  );
};

export default Footer;
