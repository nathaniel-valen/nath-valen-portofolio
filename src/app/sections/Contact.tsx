"use client";

import { Mail, Instagram, Linkedin } from "lucide-react";
import SpotlightCard from "../components/card/SpotLightCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-6xl mx-auto text-center flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white font-mono mb-2">
        Get in Touch
      </h2>
      <p className="text-gray-400 text-base font-mono mb-12 max-w-2xl">
        Let’s collaborate, connect, or just share creative ideas together.
      </p>

      {/* === Two Cards Side by Side === */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* === Left Card - Socials === */}
        <SpotlightCard className="group flex flex-col items-start justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl text-left transition-all duration-500 hover:scale-[1.02]">
          <div>
            <h3 className="text-3xl font-mono text-white mb-4">
              Let’s Connect 🤝
            </h3>
            <p className="text-gray-400 font-mono leading-relaxed mb-6">
              Whether you have a project idea, want to collaborate, or just say
              hi — I’d love to hear from you!
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4 w-full">
            <a
              href="mailto:nathaniel.valen17@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <Mail size={22} />
              <span className="font-mono">nathaniel.valen17@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/nathanielvalentinor_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <Instagram size={22} />
              <span className="font-mono">@nathanielvalentinor_</span>
            </a>
            <a
              href="https://www.linkedin.com/in/linkedin.com/in/nathaniel-valentino-robert-6974a730a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
              <span className="font-mono">linkedin.com/in/nathaniel-valentino-robert</span>
            </a>
          </div>
        </SpotlightCard>

        {/* === Right Card - Contact Form === */}
        <SpotlightCard className="group p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl text-left transition-all duration-500 hover:scale-[1.02]">
          <form className="flex flex-col gap-5 font-mono">
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="text-sm text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-primary outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-sm text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-primary outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                className="bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-primary outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-all w-fit self-end"
            >
              Send Message
            </button>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
