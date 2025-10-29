import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-4">
        {/* Gradient Divider */}
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />

        {/* Social Icons */}
        <div className="flex gap-6 mb-6">
          <a
            href="https://github.com/nathaniel-valen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/linkedin.com/in/nathaniel-valentino-robert-6974a730a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/nathanielvalentinor_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} Nathaniel Valentino Robert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
