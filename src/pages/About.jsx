import React from "react";
import { motion } from "framer-motion";

const aboutData = {
  name: "Arvind Kumar",
  email: "arvind@example.com",
  phone: "+91 98765 43210",
  github: "https://github.com/arvind",
  linkedin: "https://linkedin.com/in/arvind",
  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Firebase realtime database",
    "Social logins || OAuth",
    "Payment Gateway",
    "Firebase notification",
  ],
  experience: [
    {
      role: "MERN Stack Developer",
      company: "HindTech IT Solutions",
      duration: "2024 - Present",
      details:
        "Worked on multiple live projects, building scalable web apps and with React, Node.js, and MongoDB.",
    },
    {
      role: "Frontend Developer (Intern)",
      company: "TechNova",
      duration: "May-2024 - june 2024",
      details:
        "Focused on creating reusable React components and improving UI/UX with Tailwind and animations.",
    },
  ],
  hobbies: ["Coding", "Exploring New Tech 🔭"],
  passions: [
    "Open Source Contribution",
    "Building SaaS Products",
    "Mentoring Students",
  ],
};

export default function About() {
  return (
    <section className="py-20" id="about">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      {/* Skills */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {aboutData.skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-slate-800 text-slate-200 rounded-lg shadow hover:shadow-cyan-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Experience</h3>
        <div className="space-y-6">
          {aboutData.experience.map((exp, i) => (
            <div
              key={i}
              className="p-4 bg-slate-800 rounded-xl shadow hover:shadow-purple-500/40 transition"
            >
              <h4 className="text-lg font-bold text-cyan-400">{exp.role}</h4>
              <p className="text-slate-300">
                {exp.company} | {exp.duration}
              </p>
              <p className="mt-2 text-slate-400">{exp.details}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact</h3>
        <p className="text-slate-300">📧 {aboutData.email}</p>
        <p className="text-slate-300">📱 {aboutData.phone}</p>
        <p className="text-slate-300">
          <a
            href={aboutData.github}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href={aboutData.linkedin}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </motion.div>

      {/* Hobbies & Passions */}
      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Hobbies</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            {aboutData.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Passions</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            {aboutData.passions.map((passion, i) => (
              <li key={i}>{passion}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
