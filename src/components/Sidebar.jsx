import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function Sidebar() {
  // ✅ Social icons array
  const socials = [
    { icon: <FaGithub size={28} />, url: "https://github.com/anjali123913" },
    { icon: <FaLinkedin size={28} />, url: "https://github.com/anjali123913" },
    // { icon: <FaTwitter size={28} />, url: "https://twitter.com/" },
    // { icon: <FaInstagram size={28} />, url: "https://instagram.com/" },
    // { icon: <FaFacebook size={28} />, url: "https://facebook.com/" },
    // { icon: <FaYoutube size={28} />, url: "https://youtube.com/" },
    { icon: <FaWhatsapp size={28} />, url: "https://wa.me/8081362911" },
    // { icon: <FaTelegram size={28} />, url: "https://t.me/username" },
  ];

  return (
    <aside className="flex justify-center gap-6 py-6 flex-wrap">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-cyan-400"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </aside>
  );
}
