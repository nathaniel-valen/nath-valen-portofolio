"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center overflow-hidden"
    >
      {/* Left Side – Foto + Gradient + Hover Color */}
      <div
        className="relative flex justify-center items-center group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* gradient glow */}
        <motion.div
          animate={{
            opacity: hovered ? 0.7 : 0.4,
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute w-80 h-80 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-full blur-3xl"
        ></motion.div>

        {/* foto wajah */}
        <div className="relative overflow-hidden rounded-full">
          <img
            src="/images/about.png"
            alt="My portrait"
            className="relative w-96 h-96 object-contain drop-shadow-2xl transition-all duration-700"
            style={{
              filter: hovered ? "grayscale(0%)" : "grayscale(80%)",
            }}
          />

          {/* gradient fade bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      </div>

      {/* Right Side – Text Reveal */}
      <div ref={ref} className="text-left">
        <h2 className="text-6xl font-bold text-white font-mono mb-6">About Me</h2>

        <motion.div
          initial={{ color: "#9ca3af" }}
          animate={inView ? { color: "#ffffff" } : { color: "#9ca3af" }}
          transition={{ duration: 1 }}
          className="space-y-4 font-mono text-lg leading-relaxed"
        >
          <p>
            Hi! I’m a passionate front-end developer who thrives on turning
            complex problems into elegant, intuitive, and interactive designs.
            My focus is on creating smooth, delightful user experiences that
            blend creativity and technology seamlessly.
          </p>
          <p>
            I love experimenting with motion and micro-interactions — small
            touches that make a website feel alive. My work philosophy is
            simple: every project deserves attention to detail, good
            storytelling, and visual personality.
          </p>
          <p>
            When I’m not coding, I explore design trends, build small side
            projects, or learn new tools to stay ahead. My goal is to
            continuously grow, not just as a developer, but as a creator who
            crafts meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
