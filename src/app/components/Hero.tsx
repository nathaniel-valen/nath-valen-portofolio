"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ProfileCard from "./profile/ProfileCard";
import SplitText from "./text/SplitText";
import LiquidEther from "./background/LiquidEther";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useEffect(() => {
    // === ANIMASI TEKS PER KATA ===
    const desc = document.querySelector(".hero-desc");
    if (desc) {
      const words = desc.textContent?.split(" ") || [];
      desc.textContent = "";

      words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.className = "inline-block opacity-0 translate-y-3";
        desc.appendChild(span);
        if (i !== words.length - 1)
          desc.appendChild(document.createTextNode(" "));
      });

      gsap.to(".hero-desc span", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.4,
        color: "#6366f1",
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-12 overflow-hidden"
    >
      {/* === LIQUID BACKGROUND === */}
      <div className="absolute inset-0 -z-20">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={9}
          cursorSize={95}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* === OPTIONAL: AURORA LAYER DI ATAS LIQUID === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950/60 via-gray-900/50 to-black/80">
        <div className="absolute inset-0 animate-aurora opacity-60" />
      </div>

      {/* === KIRI: TEKS === */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 font-mono text-white z-10">
        <SplitText
          text="Nathaniel Valentino R"
          className="text-6xl font-semibold text-left"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p className="hero-desc text-gray-300 text-lg max-w-md leading-relaxed">
          Frontend Developer, Graphic Designer, Photo & Video Editor, and
          Undergraduate Student in Computer Science
        </p>
        <div className="flex gap-4">
          <a
            href="#about"
            className="inline-block mt-4 px-8 py-3 bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white hover:border hover:border-white"
          >
            About Me
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-block mt-4 px-8 py-3 border border-white text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </div>

      </div>

      {/* === KANAN: PROFILE CARD === */}
      <div className="md:w-1/2 flex justify-center z-10">
        <ProfileCard
          name="Nathaniel Valentino Robert"
          title="Frontend Developer"
          handle="nath.dev"
          status="Online"
          contactText="Let's Talk"
          avatarUrl="/images/profile.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => alert("You clicked Contact!")}
        />
      </div>
    </section>
  );
}
