"use client";

import EmblaCarousel from "../components/card/EmblaCarousel";
import SpotlightCard from "../components/card/SpotLightCard";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold text-white font-mono mb-2">
        Projects
      </h2>
      <p className="text-gray-400 text-base font-mono mb-12 max-w-2xl mx-auto">
        A selection of projects that highlight my creativity and development
        experience.
      </p>

      <EmblaCarousel>
        {/* === Project 1 === */}
        <div className="embla__slide flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Left - Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <Image
                src="/images/projects/portfolio.png"
                alt="Portfolio Website"
                width={230}
                height={230}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right - Text */}
            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                Portfolio Website
              </h3>
              <p className="text-gray-400 text-lg font-mono leading-relaxed">
                A modern personal portfolio built with Next.js, TailwindCSS, and
                Framer Motion for smooth animations.
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/username/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://portfolio-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Globe size={18} /> Live Demo
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </EmblaCarousel>
    </section>
  );
}
