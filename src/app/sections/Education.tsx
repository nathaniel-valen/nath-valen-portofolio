"use client";

import SpotlightCard from "../components/card/SpotLightCard";
import EmblaCarousel from "../components/card/EmblaCarousel";
import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold text-white font-mono mb-2">
        Education
      </h2>
      <p className="text-gray-400 text-base font-mono mb-12 max-w-2xl mx-auto">
        A journey of continuous learning and growth through technology and creativity.
      </p>

      <EmblaCarousel>
        {/* === Card 1 - University === */}
        <div className="min-w-full flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                Maranatha Christian University
              </h3>
              <p className="text-primary text-lg font-mono">
                Undergraduate Student – Informatics Engineering
              </p>
              <p className="text-gray-400 font-mono text-md">2022 – Present</p>
            </div>

            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/images/edu/maranatha.png"
                alt="Maranatha Christian University"
                width={230}
                height={230}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </SpotlightCard>
        </div>

        {/* === Card 2 - SMKN 1 Karawang === */}
        <div className="min-w-full flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row-reverse items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/images/edu/neskar.png"
                alt="SMKN 1 Karawang"
                width={220}
                height={220}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                SMKN 1 Karawang
              </h3>
              <p className="text-primary text-lg font-mono">
                Vocational Student – Software Engineering
              </p>
              <p className="text-gray-400 font-mono text-md">2019 – 2022</p>
            </div>
          </SpotlightCard>
        </div>
      </EmblaCarousel>
    </section>
  );
}
