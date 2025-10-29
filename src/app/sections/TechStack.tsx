"use client";

import DomeGallery from "../components/dome/DomeGallery";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2 z-10">
        My Tech Stack
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto font-mono text-center z-10">
        I work with a variety of technologies to build responsive, modern, and
        engaging web experiences.
      </p>

      {/* Dome fills almost entire section */}
      <div className="relative w-full h-[100vh] flex items-center justify-center">
        <DomeGallery />
      </div>
    </section>
  );
}
