import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ Projects Data
const projects = [
  // Live Projects
  {
    category: "Live Projects",
    items: [
      {
        name: "Expert Emirates",
        desc: "Expert Emirte is a trading plateform website.",
        live: "https://imaginative-kheer-d1c19a.netlify.app/",
        github: "https://github.com/anjali123913/Expert_Emirate",
      },
      {
        name: "Trading Tantra ",
        desc: "Trading website client dashboard",
        live: "https://scintillating-sopapillas-0bb392.netlify.app/",
        github: "https://github.com/anjali123913/Trading_Tantra",
      },
      {
        name: "ProductWare",
        desc: "Product management & tracking system",
        live: "https://productware.in",
        github: "",
      },
         {
        name: "Admin Dashboard",
        desc: "Trading website Admin Dashboard.",
        live: "https://melodious-melba-2f7767.netlify.app/",
        github: "",
      },
         {
        name: "User dashbpoard",
        desc: "User dasboard",
        live: "https://super-flan-678061.netlify.app/",
        github: "",
      },
         {
        name: "Idea",
        desc: "This is an Coaching management system using mern stack.",
        live: "https://eloquent-meerkat-5e38c5.netlify.app/",
        github: "",
      },
    ],
  },

  // Personal / Non-Live Projects
  {
    category: "Personal Projects",
    items: [
      {
        name: "AI Image generator",
        desc: "Image Generator Using mern stack and ImagePig api",
        github: "https://github.com/anjali123913/AI-Image-Generater",
        live: "https://taupe-cactus-b4172f.netlify.app/",
      },
      {
        name: "BuyBuddy",
        desc: "MERN E-commerce app with cart, checkout & admin dashboard",
        github: "https://github.com/yourusername/buybuddy",
        live: "No Available",
      },
      {
        name: "Medical Store Management System",
        desc: "Doctor booking + medicine delivery system",
        github: "https://github.com/yourusername/medicalstore",
        live: "No Available",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <motion.h2
        className="text-3xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h2>

      {projects.map((category, idx) => (
        <div key={idx} className="mb-12 px-6 md:px-12">
          {/* Category Title */}
          <motion.h3
            className="text-2xl font-semibold text-cyan-300 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {category.category}
          </motion.h3>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {category.items.map((proj, i) => (
              <motion.div
                key={i}
                className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300">
                    {proj.name}
                  </h4>
                  <p className="mt-2 text-slate-300">{proj.desc}</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-600 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
