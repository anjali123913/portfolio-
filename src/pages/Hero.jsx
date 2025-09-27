import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Stars } from "../components/Stars";

// Stars background component

export default function Hero() {
  return (
    <section className="relative text-center py-32 overflow-hidden bg-black">
      {/* Galaxy gradient aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Stars background */}
      <Stars />

      {/* Content */}
      <motion.h2
        className="relative text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm Anjali Patel
      </motion.h2>

      <motion.p
        className="relative mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
       MERN Stack Developer | React Enthusiast | Firebase Backend & Auth | Notifications | OAuth | Payment Gateway Integration | User Experience Architect 

      </motion.p>

      <motion.div
        className="relative mt-10 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {/* ✅ View Resume */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          View Resume
        </motion.a>

        {/* ✅ Download Resume */}
        <motion.a
          href="/resume.pdf"
          download="Resume.pdf"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      <motion.div
        className="relative mt-16 text-cyan-400 flex justify-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() =>
          window.scrollTo({
            top: 500,
            behavior: "smooth", // smooth scrolling
          })
        }
      >
        <FaArrowDown size={32} />
      </motion.div>
    </section>
  );
}
