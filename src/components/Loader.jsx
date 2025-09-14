import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Spinning ring */}
      <motion.div
        className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Optional glowing stars */}
      <motion.div
        className="absolute w-6 h-6 bg-purple-500 rounded-full blur-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full blur-md"
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />
    </div>
  );
}
