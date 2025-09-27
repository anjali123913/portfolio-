import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const EMAIL = "anjalich0542@gmail.com";

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const subject = `New message from ${emailData.name}`;
    const body = `Name: ${emailData.name}%0D%0AEmail: ${emailData.email}%0D%0A%0D%0AMessage:%0D%0A${emailData.msg}`;

    // ✅ open default mail client
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section className="py-20" id="contact">
      <motion.h2
        className="text-3xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <form
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-slate-800 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={emailData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-md bg-slate-900 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={emailData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-md bg-slate-900 text-white"
          required
        />
        <textarea
          name="msg"
          placeholder="Your Message"
          value={emailData.msg}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-md bg-slate-900 text-white"
          rows="4"
          required
        ></textarea>

        <motion.button
          type="submit"
          className="w-full bg-cyan-500 py-3 rounded-md text-white hover:bg-cyan-600 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
