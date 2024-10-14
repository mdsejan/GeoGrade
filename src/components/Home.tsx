import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.6,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center  max-h-screen  p-4 bg-body"
  >
    <div className="text-center my-12">
      <h1 className="text-3xl font-semibold">
        Geo<span className="text-[#FEE68C]">Grade</span>{" "}
      </h1>
      <h3 className="text-base font-normal">
        calculate your results in a simple way
      </h3>
    </div>
    <h2 className="text-2xl font-bold mb-6 text-text">Select a Year</h2>
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <Link
          to="/firstyear"
          className="bg-[#FFFFFF]  text-body px-4 py-8 rounded-lg border border-button transition  flex items-center justify-center"
        >
          First Year
        </Link>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <Link
          to="/secoundyear"
          className="bg-[#D9E4EF] text-body px-4 py-8 rounded-lg border border-button transition  flex items-center justify-center"
        >
          Second Year
        </Link>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Link
          to="/thirdyear"
          className="bg-[#F2B3C3] text-body px-4 py-8 rounded-lg border border-button transition  flex items-center justify-center"
        >
          Third Year
        </Link>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <Link
          to="/fourthyear"
          className="bg-[#D3C4E6] text-body px-4 py-8 rounded-lg border border-button transition  flex items-center justify-center"
        >
          Fourth Year
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default Home;
