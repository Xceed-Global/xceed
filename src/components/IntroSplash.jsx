import { motion } from "framer-motion";

export default function IntroSplash() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-wide"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-teal-400">XCEED</span>
      </motion.h1>
    </motion.div>
  );
}
