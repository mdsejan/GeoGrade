import { motion } from "framer-motion";

const FirstYear = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-xl font-bold mb-4">First Year CGPA Calculation</h2>
      {/* Your CGPA form here */}
    </motion.div>
  );
};

export default FirstYear;
