import { motion } from "framer-motion";

const FirstYear = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h2
        className="text-3xl font-bold text-gray-700 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        This Will be <br /> Available Soon
      </motion.h2>
    </div>
  );
};

export default FirstYear;
