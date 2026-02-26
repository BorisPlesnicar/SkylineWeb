"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSection = useInView(0.1);
  const screenshotsSection = useInView(0.1);
  const featuresSection = useInView(0.1);
  const aboutSection = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#screenshots", label: "Screenshots" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#privacy", label: "Privacy" },
  ];

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "Flight Tracking",
      description: "Track all your flights in one place. Record departure and arrival times, routes, and airlines with ease.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Interactive Map",
      description: "Visualise your travel routes on an interactive map powered by Google Maps. See where you've been.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Stats & Achievements",
      description: "View comprehensive statistics about your travels and unlock achievements as you explore the world.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Document Upload",
      description: "Upload boarding passes and tickets securely. OCR technology extracts key information automatically.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Company & Personal",
      description: "Organise your flights by category. Separate business trips from personal travels effortlessly.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Journey Memories",
      description: "Relive your journeys with photos, notes, and memories attached to each flight.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="fixed inset-0 gradient-animated opacity-40 pointer-events-none" />
      <div className="fixed inset-0 noise-overlay" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
              <Image
                src="/icon.png"
                alt="Skyline App Icon"
                width={36}
                height={36}
                className="rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-heavy text-xl tracking-wider text-white">
                SKY<span className="text-red-500">LINE</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-light text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-light text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section
        ref={heroSection.ref}
        id="hero"
        className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 min-h-screen flex items-center"
      >
        {/* Background decorations */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text content */}
            <div className={`${heroSection.inView ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/icon.png"
                  alt="Skyline App Icon"
                  width={72}
                  height={72}
                  className="rounded-2xl animate-pulse-glow"
                />
                <div>
                  <h1 className="font-heavy text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
                    <span className="text-white">SKY</span>
                    <span className="text-red-500 text-glow-red">LINE</span>
                  </h1>
                </div>
              </div>

              <div className="accent-line mb-10" />

              <p className="font-heavy text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight text-white/90">
                Track your flights,{" "}
                <span className="text-red-500">relive your journeys</span>
              </p>

              <p className="font-light text-lg sm:text-xl text-gray-500 mb-14 leading-relaxed max-w-xl">
                A modern iOS app that helps you manage your flight history, track
                your travels, and preserve your journey memories with interactive
                maps and comprehensive statistics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/skyline-hub/id6758091952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-heavy text-sm tracking-widest uppercase rounded-xl transition-all duration-300 glow-red hover:glow-red-strong hover-lift"
                >
                  Download on App Store
                  <svg
                    className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-heavy text-sm tracking-widest uppercase rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 hover-lift"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Right - App preview */}
            <div className={`hidden lg:flex justify-center items-center relative ${heroSection.inView ? "animate-fade-in-up-delay-3" : "opacity-0"}`}>
              <div className="relative">
                {/* Glow behind phones */}
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-[80px] scale-75" />

                <div className="relative flex items-center gap-6">
                  {/* Main phone */}
                  <div className="animate-float phone-shadow">
                    <Image
                      src="/home.png"
                      alt="Skyline home screen"
                      width={280}
                      height={607}
                      className="rounded-[2rem] border border-white/10"
                    />
                  </div>
                  {/* Secondary phone - offset */}
                  <div className="animate-float-delay phone-shadow -mt-16">
                    <Image
                      src="/map.png"
                      alt="Skyline map screen"
                      width={260}
                      height={563}
                      className="rounded-[2rem] border border-white/10 opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SCREENSHOTS ==================== */}
      <section
        ref={screenshotsSection.ref}
        id="screenshots"
        className="relative py-32 px-6 sm:px-8 lg:px-12"
      >
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 ${screenshotsSection.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="font-light text-sm tracking-[0.3em] uppercase text-red-500 mb-4">Gallery</p>
            <h2 className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              App Screenshots
            </h2>
            <div className="accent-line mx-auto" />
          </div>

          {/* Screenshots grid */}
          <div className="max-w-6xl mx-auto">
            {/* Row 1 - 2 large */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ${screenshotsSection.inView ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
              {[
                "/home.png",
                "/live.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group glass-card p-8 rounded-2xl transition-all duration-500 hover-lift overflow-hidden"
                >
                  <div className="relative flex justify-center">
                    <Image
                      src={src}
                      alt={`Skyline App Screenshot ${index + 1}`}
                      width={300}
                      height={650}
                      className="w-full max-w-[260px] h-auto rounded-2xl phone-shadow transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - 3 smaller */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${screenshotsSection.inView ? "animate-fade-in-up-delay-4" : "opacity-0"}`}>
              {[
                "/map.png",
                "/home.png",
                "/live.png",
              ].map((src, index) => (
                <div
                  key={index + 2}
                  className="group glass-card p-6 rounded-2xl transition-all duration-500 hover-lift overflow-hidden"
                >
                  <div className="relative flex justify-center">
                    <Image
                      src={src}
                      alt={`Skyline App Screenshot ${index + 3}`}
                      width={300}
                      height={650}
                      className="w-full max-w-[240px] h-auto rounded-2xl phone-shadow transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section
        ref={featuresSection.ref}
        id="features"
        className="relative py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 ${featuresSection.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="font-light text-sm tracking-[0.3em] uppercase text-red-500 mb-4">What we offer</p>
            <h2 className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Features
            </h2>
            <div className="accent-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group glass-card p-8 rounded-2xl transition-all duration-500 hover-lift relative overflow-hidden ${
                  featuresSection.inView
                    ? `animate-fade-in-up-delay-${Math.min(index + 1, 5)}`
                    : "opacity-0"
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:from-red-500/30 group-hover:to-red-600/20 transition-all duration-500 border border-red-500/10 group-hover:border-red-500/30">
                    {feature.icon}
                  </div>
                  <h3 className="font-heavy text-xl mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-light text-gray-500 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section
        ref={aboutSection.ref}
        id="about"
        className="relative py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className={`max-w-4xl mx-auto text-center relative z-10 ${aboutSection.inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-light text-sm tracking-[0.3em] uppercase text-red-500 mb-4">Who we are</p>
          <h2 className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-8">
            About
          </h2>
          <div className="accent-line mx-auto mb-12" />

          <p className="font-light text-xl text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Skyline is developed with passion for travel and technology. We
            believe that every journey deserves to be remembered and every flight
            tells a story.
          </p>
          <p className="font-light text-sm text-gray-600 mb-16 italic">
            As part of a diploma thesis at HTL Krems.
          </p>

          <div className="glass-card p-10 sm:p-14 rounded-3xl animate-pulse-glow">
            <h3 className="font-heavy text-2xl mb-10 text-white tracking-wide">
              Developers
            </h3>
            <div className="space-y-8">
              <div>
                <p className="font-heavy text-xl text-white mb-1">
                  Boris Plesnicar
                </p>
                <p className="font-light text-sm text-gray-500 mb-3">
                  Owner of registered business &quot;Plesnicar Solutions&quot;
                </p>
                <a
                  href="mailto:plesnicaroffice@gmail.com"
                  className="font-light text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-2 group"
                >
                  plesnicaroffice@gmail.com
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div>
                <p className="font-heavy text-xl text-white mb-3">
                  Jan-Ole Baumgartner
                </p>
                <a
                  href="mailto:janole2333@gmail.com"
                  className="font-light text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-2 group"
                >
                  janole2333@gmail.com
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRIVACY POLICY ==================== */}
      <section
        id="privacy"
        className="relative py-32 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="font-light text-sm tracking-[0.3em] uppercase text-red-500 mb-4">Legal</p>
            <h2 className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Privacy Policy
            </h2>
            <div className="accent-line" />
          </div>

          <div className="space-y-6">
            <p className="font-light text-gray-600 text-sm">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {[
              {
                num: "1",
                title: "Introduction",
                content: (
                  <p className="font-light text-gray-400 leading-relaxed">
                    This Privacy Policy describes how Skyline (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your personal information when you use our iOS application (&quot;App&quot;). We are committed to protecting your privacy and ensuring transparency about our data practices.
                  </p>
                ),
              },
              {
                num: "2",
                title: "Data Collected",
                content: (
                  <>
                    <p className="font-light text-gray-400 leading-relaxed mb-4">
                      When you use Skyline, we collect the following types of information:
                    </p>
                    <ul className="space-y-3 text-gray-400 font-light">
                      {[
                        ["Account Information:", "Name, email address, user ID, and profile picture"],
                        ["Flight Data:", "Flight numbers, routes, departure and arrival times, airlines, and other flight-related information"],
                        ["Documents and Images:", "Boarding passes, tickets, travel documents, and photos you upload"],
                        ["Device Information:", "IP address, operating system version, device type, and unique device identifiers"],
                        ["Location Data:", "Approximate location information derived from flight data and map interactions"],
                        ["Usage Data:", "Information about how you interact with the App"],
                      ].map(([label, desc], i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                          </span>
                          <span><strong className="text-white font-heavy">{label}</strong> {desc}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                num: "3",
                title: "Use of Data",
                content: (
                  <>
                    <p className="font-light text-gray-400 leading-relaxed mb-4">
                      We use the collected data for the following purposes:
                    </p>
                    <ul className="space-y-3 text-gray-400 font-light">
                      {[
                        "To provide and maintain the App's core functionality",
                        "To process and store your flight history and travel data",
                        "To enable interactive map features and route visualisation",
                        "To extract information from uploaded documents using OCR technology",
                        "To generate statistics, achievements, and personalised insights",
                        "To improve the App's performance and user experience",
                        "To communicate with you regarding the App",
                        "To ensure the security and integrity of the App",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                num: "4",
                title: "Third-Party Services",
                content: (
                  <>
                    <p className="font-light text-gray-400 leading-relaxed mb-4">
                      Skyline integrates with the following third-party services:
                    </p>
                    <ul className="space-y-3 text-gray-400 font-light">
                      {[
                        ["Supabase:", "Used for backend services, database storage, and user authentication."],
                        ["Google Maps:", "Used for interactive map features and location services."],
                        ["Aviationstack:", "Used for flight data and aviation information."],
                        ["OCR Service:", "Used for extracting information from uploaded documents and images."],
                        ["Expo:", "Used as the development framework for the iOS App."],
                      ].map(([label, desc], i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                          </span>
                          <span><strong className="text-white font-heavy">{label}</strong> {desc}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-light text-gray-500 mt-6 text-sm">
                      We recommend reviewing the privacy policies of these third-party services.
                    </p>
                  </>
                ),
              },
              {
                num: "5",
                title: "Data Retention",
                content: (
                  <p className="font-light text-gray-400 leading-relaxed">
                    We retain your personal data for as long as necessary to provide the App&apos;s services. You may delete your account and associated data at any time through the App settings. Upon account deletion, we will delete or anonymise your personal data in accordance with applicable data protection laws.
                  </p>
                ),
              },
              {
                num: "6",
                title: "User Rights",
                content: (
                  <>
                    <p className="font-light text-gray-400 leading-relaxed mb-4">
                      Under applicable data protection laws, including the UK GDPR, you have the following rights:
                    </p>
                    <ul className="space-y-3 text-gray-400 font-light">
                      {[
                        ["Right of Access:", "Request a copy of the personal data we hold about you."],
                        ["Right to Rectification:", "Request correction of inaccurate or incomplete personal data."],
                        ["Right to Erasure:", "Request deletion of your personal data under certain circumstances."],
                        ["Right to Restrict Processing:", "Request restriction of processing of your personal data."],
                        ["Right to Data Portability:", "Receive your personal data in a structured, commonly used format."],
                        ["Right to Object:", "Object to processing of your personal data under certain circumstances."],
                      ].map(([label, desc], i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                          </span>
                          <span><strong className="text-white font-heavy">{label}</strong> {desc}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-light text-gray-400 mt-6">
                      To exercise any of these rights, please contact us at{" "}
                      <a href="mailto:plesnicaroffice@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">
                        plesnicaroffice@gmail.com
                      </a>.
                    </p>
                  </>
                ),
              },
              {
                num: "7",
                title: "Children's Privacy",
                content: (
                  <p className="font-light text-gray-400 leading-relaxed">
                    Skyline is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                  </p>
                ),
              },
              {
                num: "8",
                title: "Security",
                content: (
                  <p className="font-light text-gray-400 leading-relaxed">
                    We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                ),
              },
              {
                num: "9",
                title: "Changes to This Privacy Policy",
                content: (
                  <p className="font-light text-gray-400 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically.
                  </p>
                ),
              },
              {
                num: "10",
                title: "Contact",
                content: (
                  <>
                    <p className="font-light text-gray-400 leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="glass-card p-6 rounded-xl">
                      <p className="font-heavy text-sm tracking-wider uppercase text-red-500 mb-4">Developers</p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-heavy text-white">Boris Plesnicar</p>
                          <p className="font-light text-gray-500 text-sm">Owner of registered business &quot;Plesnicar Solutions&quot;</p>
                          <a href="mailto:plesnicaroffice@gmail.com" className="font-light text-red-500 hover:text-red-400 transition-colors text-sm">
                            plesnicaroffice@gmail.com
                          </a>
                        </div>
                        <div>
                          <p className="font-heavy text-white">Jan-Ole Baumgartner</p>
                          <a href="mailto:janole2333@gmail.com" className="font-light text-red-500 hover:text-red-400 transition-colors text-sm">
                            janole2333@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ].map((section) => (
              <div
                key={section.num}
                className="glass-card p-8 sm:p-10 rounded-2xl transition-all duration-300"
              >
                <h3 className="font-heavy text-2xl mb-5 text-white flex items-baseline gap-3">
                  <span className="text-red-500 text-lg">{section.num}.</span>
                  {section.title}
                </h3>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative py-16 px-6 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/icon.png"
                alt="Skyline App Icon"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-heavy text-lg tracking-wider text-white">
                SKY<span className="text-red-500">LINE</span>
              </span>
            </div>

            <p className="font-light text-sm text-gray-600 mb-2">
              &copy; {new Date().getFullYear()} Skyline. All rights reserved.
            </p>
            <p className="font-light text-sm text-gray-600 mb-1">
              Developed by{" "}
              <a href="mailto:plesnicaroffice@gmail.com" className="text-red-500/70 hover:text-red-400 transition-colors">
                Boris Plesnicar
              </a>{" "}
              and{" "}
              <span className="text-gray-400">Jan-Ole Baumgartner</span>
            </p>
            <p className="font-light text-xs text-gray-700 mt-1">
              As part of a diploma thesis at HTL Krems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
