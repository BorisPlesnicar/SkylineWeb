"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 gradient-animated opacity-50 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-red-500/20 shadow-lg shadow-red-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Skyline App Icon"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <h1 className="text-2xl font-bold text-white tracking-tight">
                SKY<span className="text-red-500">LINE</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#screenshots"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium relative group"
              >
                Screenshots
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
              </a>
              <a
                href="#privacy"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
              </a>
            </div>
            <div className="md:hidden">
              <a
                href="#privacy"
                className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        {/* Red accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
        <Image
                    src="/icon.png"
                    alt="Skyline App Icon"
                    width={80}
                    height={80}
                    className="rounded-2xl glow-red"
                  />
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                    <span className="text-white">SKY</span>
                    <span className="text-red-500 text-glow-red">LINE</span>
          </h1>
                </div>
                <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-transparent mb-8" />
              </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-200">
              Track your flights,{" "}
              <span className="text-red-500">relive your journeys</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
              A modern iOS app that helps you manage your flight history, track
              your travels, and preserve your journey memories with interactive
              maps and comprehensive statistics.
            </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 glow-red hover:glow-red-strong hover-lift uppercase tracking-wide"
                >
                  Download on the App Store
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <a
                  href="#privacy"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-red-500/10 text-white font-bold rounded-lg transition-all duration-300 border-2 border-red-500 hover:border-red-400 hover-lift uppercase tracking-wide"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            {/* App Screenshots Preview */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 gap-6 p-6 bg-black/50 backdrop-blur-sm rounded-3xl border border-gray-800">
                  <div className="relative group">
                    <Image
                      src="/71D728F0-6B28-4AA9-BBA4-AE013780079C.png"
                      alt="Skyline App Screenshot 1"
                      width={300}
                      height={650}
                      className="rounded-2xl border border-gray-700 group-hover:border-red-500/50 transition-all hover-lift shadow-2xl"
                    />
                  </div>
                  <div className="relative group mt-12">
                    <Image
                      src="/7384149A-5050-4B0F-A917-5775CBA7E62F.png"
                      alt="Skyline App Screenshot 2"
                      width={300}
                      height={650}
                      className="rounded-2xl border border-gray-700 group-hover:border-red-500/50 transition-all hover-lift shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section
        id="screenshots"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-gray-950"
      >
        {/* Section divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="text-white">APP</span>{" "}
              <span className="text-red-500">SCREENSHOTS</span>
            </h2>
            <div className="h-1 w-32 bg-red-500 mx-auto" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Experience Skyline through these screenshots showcasing the app&apos;s
              modern interface and powerful features.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* First row - 2 screenshots centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                "/71D728F0-6B28-4AA9-BBA4-AE013780079C.png",
                "/7384149A-5050-4B0F-A917-5775CBA7E62F.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group relative bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
                  <div className="relative flex justify-center">
                    <Image
                      src={src}
                      alt={`Skyline App Screenshot ${index + 1}`}
                      width={350}
                      height={758}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - 3 screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                "/74767EA7-3716-4D31-BADC-20ACC33246A4.png",
                "/BD0A72AA-7D1E-4CB6-9E74-1223086E7CC0.png",
                "/E4608B64-D4DD-456C-BFC2-63F3E4CC2063.png",
              ].map((src, index) => (
                <div
                  key={index + 2}
                  className="group relative bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
                  <div className="relative flex justify-center">
                    <Image
                      src={src}
                      alt={`Skyline App Screenshot ${index + 3}`}
                      width={350}
                      height={758}
                      className="w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-gray-950"
      >
        {/* Section divider with red accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="text-white">FEAT</span>
              <span className="text-red-500">URES</span>
            </h2>
            <div className="h-1 w-24 bg-red-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Flight Tracking */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Flight Tracking
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Track all your flights in one place. Record departure and arrival
                  times, routes, and airlines with ease.
                </p>
              </div>
            </div>

            {/* Feature 2: Interactive Map */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Interactive Map
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Visualise your travel routes on an interactive map powered by
                  Google Maps. See where you&apos;ve been and plan future journeys.
                </p>
              </div>
            </div>

            {/* Feature 3: Stats & Achievements */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Stats & Achievements
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  View comprehensive statistics about your travels and unlock
                  achievements as you explore the world.
                </p>
              </div>
            </div>

            {/* Feature 4: Document Upload */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Document Upload
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Upload and store boarding passes, tickets, and travel documents
                  securely. OCR technology extracts key information automatically.
                </p>
              </div>
            </div>

            {/* Feature 5: Company & Personal Flights */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Company & Personal Flights
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Organise your flights by category. Separate business trips from
                  personal travels for better organisation.
                </p>
              </div>
            </div>

            {/* Feature 6: Journey Memories */}
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 glow-red group-hover:glow-red-strong transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                  Journey Memories
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Relive your journeys with photos, notes, and memories attached
                  to each flight. Build a comprehensive travel diary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Contact Section */}
      <section
        id="about"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black"
      >
        {/* Section divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black mb-8">
            <span className="text-white">ABO</span>
            <span className="text-red-500">UT</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-12" />
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Skyline is developed with passion for travel and technology. We
            believe that every journey deserves to be remembered and every flight
            tells a story.
          </p>
          <p className="text-sm text-gray-500 mb-12 italic max-w-2xl mx-auto">
            As part of a diploma thesis at HTL Krems.
          </p>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-10 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 glow-red hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Developers
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl text-gray-200 mb-2 font-semibold">
                    Boris Plesnicar
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    Owner of registered business &quot;Plesnicar Solutions&quot;
                  </p>
                  <a
                    href="mailto:plesnicaroffice@gmail.com"
                    className="text-red-500 hover:text-red-400 transition-colors font-semibold text-lg inline-flex items-center gap-2 group"
                  >
                    plesnicaroffice@gmail.com
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                <div>
                  <p className="text-2xl text-gray-200 mb-2 font-semibold">
                    Jan-Ole Baumgartner
                  </p>
                  <a
                    href="mailto:janole2333@gmail.com"
                    className="text-red-500 hover:text-red-400 transition-colors font-semibold text-lg inline-flex items-center gap-2 group"
                  >
                    janole2333@gmail.com
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section
        id="privacy"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black"
      >
        {/* Section divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="text-white">PRIVACY</span>{" "}
              <span className="text-red-500">POLICY</span>
            </h2>
            <div className="h-1 w-32 bg-red-500" />
          </div>
          <div className="space-y-8">
            <p className="text-gray-400 italic text-sm">
              Last Updated: {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="space-y-10">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">1.</span> Introduction
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This Privacy Policy describes how Skyline (&quot;we&quot;,
                  &quot;our&quot;, or &quot;us&quot;) collects, uses, and
                  protects your personal information when you use our iOS
                  application (&quot;App&quot;). We are committed to protecting
                  your privacy and ensuring transparency about our data
                  practices.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">2.</span> Data Collected
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you use Skyline, we collect the following types of
                  information:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Account Information:</strong>{" "}
                    Name, email address, user ID, and profile picture
                  </li>
                  <li>
                    <strong className="text-white">Flight Data:</strong>{" "}
                    Flight numbers, routes, departure and arrival times, airlines,
                    and other flight-related information
                  </li>
                  <li>
                    <strong className="text-white">Documents and Images:</strong>{" "}
                    Boarding passes, tickets, travel documents, and photos you
                    upload to the App
                  </li>
                  <li>
                    <strong className="text-white">Device Information:</strong>{" "}
                    IP address, operating system version, device type, and unique
                    device identifiers
                  </li>
                  <li>
                    <strong className="text-white">Location Data:</strong>{" "}
                    Approximate location information derived from flight data and
                    map interactions
                  </li>
                  <li>
                    <strong className="text-white">Usage Data:</strong>{" "}
                    Information about how you interact with the App, including
                    features used and time spent in the App
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">3.</span> Use of Data
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the collected data for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li>To provide and maintain the App&apos;s core functionality</li>
                  <li>To process and store your flight history and travel data</li>
                  <li>To enable interactive map features and route visualisation</li>
                  <li>To extract information from uploaded documents using OCR technology</li>
                  <li>To generate statistics, achievements, and personalised insights</li>
                  <li>To improve the App&apos;s performance and user experience</li>
                  <li>To communicate with you regarding the App and respond to your inquiries</li>
                  <li>To ensure the security and integrity of the App</li>
                </ul>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">4.</span> Third-Party Services
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Skyline integrates with the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Supabase:</strong> Used for
                    backend services, database storage, and user authentication.
                    Supabase&apos;s privacy policy applies to data processed
                    through their services.
                  </li>
                  <li>
                    <strong className="text-white">Google Maps:</strong> Used
                    for interactive map features and location services. Google&apos;s
                    privacy policy applies to data processed through Google Maps.
                  </li>
                  <li>
                    <strong className="text-white">Aviationstack:</strong> Used
                    for flight data and aviation information. Aviationstack&apos;s
                    privacy policy applies to data processed through their API.
                  </li>
                  <li>
                    <strong className="text-white">OCR Service:</strong> Used
                    for extracting information from uploaded documents and images.
                    The OCR service provider&apos;s privacy policy applies to data
                    processed through their services.
                  </li>
                  <li>
                    <strong className="text-white">Expo:</strong> Used as the
                    development framework for the iOS App. Expo&apos;s privacy
                    policy applies to data processed through their services.
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-6">
                  We recommend reviewing the privacy policies of these third-party
                  services to understand how they handle your data.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">5.</span> Data Retention
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal data for as long as necessary to provide
                  the App&apos;s services and fulfil the purposes outlined in this
                  Privacy Policy. You may delete your account and associated data
                  at any time through the App settings. Upon account deletion, we
                  will delete or anonymise your personal data in accordance with
                  applicable data protection laws, except where we are required to
                  retain certain information for legal or regulatory purposes.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">6.</span> User Rights
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Under applicable data protection laws, including the UK GDPR, you
                  have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Right of Access:</strong> You
                    have the right to request a copy of the personal data we hold
                    about you.
                  </li>
                  <li>
                    <strong className="text-white">Right to Rectification:</strong>{" "}
                    You have the right to request correction of inaccurate or
                    incomplete personal data.
                  </li>
                  <li>
                    <strong className="text-white">Right to Erasure:</strong>{" "}
                    You have the right to request deletion of your personal data
                    under certain circumstances.
                  </li>
                  <li>
                    <strong className="text-white">Right to Restrict Processing:</strong>{" "}
                    You have the right to request restriction of processing of your
                    personal data.
                  </li>
                  <li>
                    <strong className="text-white">Right to Data Portability:</strong>{" "}
                    You have the right to receive your personal data in a
                    structured, commonly used format.
                  </li>
                  <li>
                    <strong className="text-white">Right to Object:</strong> You
                    have the right to object to processing of your personal data
                    under certain circumstances.
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-6">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:plesnicaroffice@gmail.com"
                    className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                  >
                    plesnicaroffice@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">7.</span> Children&apos;s Privacy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Skyline is not intended for children under the age of 13. We do
                  not knowingly collect personal information from children under 13.
                  If you are a parent or guardian and believe that your child has
                  provided us with personal information, please contact us
                  immediately. If we become aware that we have collected personal
                  information from a child under 13, we will take steps to delete
                  such information promptly.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">8.</span> Security
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organisational measures to
                  protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure. While we strive to use commercially acceptable means to
                  protect your personal data, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">9.</span> Changes to This Privacy Policy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date. You are
                  advised to review this Privacy Policy periodically for any
                  changes. Changes to this Privacy Policy are effective when they
                  are posted on this page.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <span className="text-red-500">10.</span> Contact
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="mt-4 p-6 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg border border-red-500/20">
                  <p className="text-white mb-3">
                    <strong className="text-red-500">Developers:</strong>
                  </p>
                  <p className="text-white mb-2 ml-4">
                    Boris Plesnicar (Owner of registered business &quot;Plesnicar Solutions&quot;)
                  </p>
                  <p className="text-white mb-1 ml-4">
                    <a
                      href="mailto:plesnicaroffice@gmail.com"
                      className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                    >
                      plesnicaroffice@gmail.com
                    </a>
                  </p>
                  <p className="text-white mb-2 ml-4 mt-4">
                    Jan-Ole Baumgartner
                  </p>
                  <p className="text-white mb-4 ml-4">
                    <a
                      href="mailto:janole2333@gmail.com"
                      className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                    >
                      janole2333@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-black">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="max-w-7xl mx-auto text-center text-gray-400 relative z-10">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">SKY<span className="text-red-500">LINE</span></span>. All rights reserved.
          </p>
          <p className="mb-2">
            Developed by{" "}
            <a
              href="mailto:plesnicaroffice@gmail.com"
              className="text-red-500 hover:text-red-400 transition-colors font-semibold"
            >
              Boris Plesnicar
            </a>
            {" "}and{" "}
            <span className="text-white font-semibold">Jan-Ole Baumgartner</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            As part of a diploma thesis at HTL Krems
          </p>
        </div>
      </footer>
    </div>
  );
}
