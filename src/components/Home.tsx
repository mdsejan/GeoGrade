import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
};

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="flex flex-col items-center justify-center max-h-screen p-4 bg-body"
  >
    <div className="text-center my-12">
      <h1 className="text-3xl font-semibold">
        Geo<span className="text-[#FEE68C]">Grade</span>{" "}
      </h1>
      <h2 className="text-base font-normal">
        calculate your results in a simple way
      </h2>
    </div>
    <h3 className="text-2xl font-bold mb-6 text-text">Select a Year</h3>
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <Link
          to="/firstyear"
          className="bg-[#FFFFFF] text-body px-4 py-8 rounded-lg border border-button transition flex items-center justify-center"
          aria-label="First Year Result"
        >
          <span>First Year</span>
        </Link>
      </motion.div>
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <Link
          to="/secoundyear"
          className="bg-[#D9E4EF] text-body px-4 py-8 rounded-lg border border-button transition flex items-center justify-center"
          aria-label="Second Year Result"
        >
          <span>Second Year</span>
        </Link>
      </motion.div>
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <Link
          to="/thirdyear"
          className="bg-[#F2B3C3] text-body px-4 py-8 rounded-lg border border-button transition flex items-center justify-center"
          aria-label="Third Year Result"
        >
          <span>Third Year</span>
        </Link>
      </motion.div>
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <Link
          to="/fourthyear"
          className="bg-[#D3C4E6] text-body px-4 py-8 rounded-lg border border-button transition flex items-center justify-center"
          aria-label="Fourth Year Result"
        >
          <span>Fourth Year</span>
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default Home;
