"use client";

import EmblaCarousel from "../components/card/EmblaCarousel";
import SpotlightCard from "../components/card/SpotLightCard";
import Image from "next/image";

export default function Organization() {
  return (
    <section
      id="organization"
      className="py-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center"
    >
      <h2 className="text-4xl font-bold text-white font-mono mb-2">
        Organization
      </h2>
      <p className="text-gray-400 text-base font-mono mb-12 max-w-2xl mx-auto">
        Experiences that shaped my leadership, teamwork, and creativity.
      </p>

      <EmblaCarousel>
        {/* === Voice of Maranatha === */}
        <div className="min-w-full embla__slide  flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                Voice of Maranatha
              </h3>
              <p className="text-primary text-lg font-mono">2022 – Present</p>

              <ul className="text-gray-400 text-md font-mono space-y-1 mt-3">
                <li>• 2025 — Head of Media Creative & Design</li>
                <li>• 2024 — Vice President</li>
                <li>• 2023 — Member of Media Creative & Design</li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/images/edu/vom.png"
                alt="Voice of Maranatha"
                width={220}
                height={220}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </SpotlightCard>
        </div>

        {/* === HMIF Maranatha === */}
        <div className="min-w-full flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row-reverse items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/images/edu/hmif.png"
                alt="HMIF Maranatha"
                width={220}
                height={220}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                HMIF Maranatha (Himpunan Mahasiswa Informatika)
              </h3>
              <p className="text-primary text-lg font-mono">2024 – 2025</p>
              <p className="text-gray-400 text-md font-mono">
                Coordinator of Spiritualy Division
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* === SEMAFIT Maranatha === */}
        <div className="min-w-full flex justify-center">
          <SpotlightCard className="group w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="md:w-1/2 text-left space-y-3">
              <h3 className="text-3xl font-mono text-white">
                SEMAFIT Maranatha
              </h3>
              <p className="text-primary text-lg font-mono">2023 – 2024</p>
              <p className="text-gray-400 text-md font-mono">
                Member of Spiritualy Division
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/images/edu/semafit.png"
                alt="SEMAFIT Maranatha"
                width={220}
                height={220}
                className="rounded-xl object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </SpotlightCard>
        </div>
      </EmblaCarousel>
    </section>
  );
}
