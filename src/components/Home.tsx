import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center h-screen bg-gray-100"
  >
    <h2 className="text-2xl font-bold mb-6">Select a Year</h2>
    <Link
      to="/firstyear"
      className="bg-blue-500 text-white p-3 rounded mb-4 w-64 text-center"
    >
      First Year
    </Link>
    <Link
      to="/secoundyear"
      className="bg-blue-500 text-white p-3 rounded mb-4 w-64 text-center"
    >
      Secound Year
    </Link>
    <Link
      to="/thirdyear"
      className="bg-blue-500 text-white p-3 rounded mb-4 w-64 text-center"
    >
      Third Year
    </Link>
    <Link
      to="/fourthyear"
      className="bg-blue-500 text-white p-3 rounded w-64 text-center"
    >
      Fourth Year
    </Link>
  </motion.div>
);

export default Home;
