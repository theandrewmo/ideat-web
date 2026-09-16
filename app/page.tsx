import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileShowcase from "./components/ProfileShowcase";
import ScannerDemo from "./components/ScannerDemo";
import { Camera, Barcode, Shield, Cpu, Lock, Watch, Sparkles, Check, ArrowRight, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/20 to-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for iOS 17+ & watchOS 10+</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Know What You Eat. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Clinically.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Real-time packaging OCR, GS1-validated barcode scanning, and personalized nutrition evaluations powered by <strong className="text-white font-semibold">10,360+ on-device USDA foods</strong> and guidelines from the ADA, AHA, Harvard T.H. Chan, and AICR.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 cursor-pointer text-sm"
              >
                <span>Download on the App Store</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#clinical-profiles"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all text-sm"
              >
                Explore Interactive Profiles
              </a>
            </div>

            {/* Key Value Props */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero Cloud Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>100% On-Device & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero Third-Party Trackers</span>
              </div>
            </div>
          </div>

          {/* Device Mockup Showcase */}
          <div className="mt-16 max-w-4xl mx-auto relative">
            <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800/80 p-3 sm:p-4 shadow-2xl backdrop-blur-xl ring-1 ring-emerald-500/20">
              <div className="rounded-2xl bg-slate-950 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-400/40">
                      <Image src="/app-icon.png" alt="Ideat Icon" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">Ideat Scanner</div>
                      <div className="text-xs text-emerald-400 font-medium">Dual Optical & Barcode Engine</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Point your camera at any food packaging or barcode. Ideat instantly performs Modulo-10 checksum validation, extracts Nutrition Facts, and cross-examines 12 biomarkers against your active dietary lens.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 font-medium">Harvard 10:1 Carb/Fiber Rule</span>
                      <span className="text-emerald-400 font-bold">Passing (5.2:1)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 font-medium">NOVA Food Classification</span>
                      <span className="text-emerald-400 font-bold">NOVA 1 (Whole Food)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 font-medium">Trans Fats & Nitrites</span>
                      <span className="text-emerald-400 font-bold">0.0g (Zero Tolerance)</span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-3xl bg-slate-900 border-4 border-slate-800 p-2 shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="h-6 flex items-center justify-between px-3 text-[10px] text-slate-400">
                    <span>9:41</span>
                    <span>5G • 100%</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-3 text-emerald-400 animate-pulse">
                      <Camera className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-white">Live Viewfinder Active</span>
                    <span className="text-[10px] text-slate-400 mt-1">Multi-Frame Temporal Debouncing</span>
                  </div>
                  <div className="h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-[10px] font-semibold text-emerald-400">
                    Ezekiel 4:9 Bread • Optimal Match
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL TRUST BAR */}
      <section id="standards" className="border-y border-slate-850 bg-slate-900/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Clinical Guidelines & Consensus Authorities Built Into the Core Engine
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center text-xs font-medium text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">ADA Diabetes</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">AHA Heart</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">Harvard T.H. Chan</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">AICR Oncology</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">AGA Gut/IBD</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">Celiac Disease</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">ISSN Fitness</div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">NOVA 1-4</div>
          </div>
        </div>
      </section>

      {/* LIVE INTERACTIVE SCANNER DEMO */}
      <ScannerDemo />

      {/* INTERACTIVE 9 PROFILES */}
      <section id="clinical-profiles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Precision Nutrition Personalization
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            9 Specialized Health & Clinical Lenses
          </h3>
          <p className="text-sm sm:text-base text-slate-400">
            Switch your active lens in real time from the scanner dropdown. See how Ideat applies clinical consensus thresholds to real supermarket foods.
          </p>
        </div>

        <ProfileShowcase />
      </section>

      {/* ARCHITECTURE & FEATURES GRID */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Engineered for Precision
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Next-Generation Food Scanner Technology
          </h3>
          <p className="text-sm sm:text-base text-slate-400">
            Built from scratch in pure Swift with zero third-party dependencies for maximum reliability in grocery store aisles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Barcode className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">GS1 Modulo-10 Checksum</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enforces mathematical check digit validation across UPC-A, EAN-13, and GTIN-14. Automatically expands zero-suppressed 8-digit UPC-E codes and rejects partial camera reads before database lookup.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Apple Vision Optical OCR</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Extracts complex multi-column Nutrition Facts panels directly on-device. CoreImage highlight filters compress specular reflections from supermarket fluorescent lights on glossy packaging.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">100% On-Device Privacy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your dietary health profiles and scanned products never leave your hardware. Biometric Face ID / Touch ID passkeys and offline-first Guest Mode ensure total data sovereignty.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Harvard 10:1 Ratio & Net Carbs</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Distinguishes whole intact grains from refined starch matrices. Enforces &le;10:1 carb-to-fiber ratios, whole grain first ingredient verification, and added sugar ceilings.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Retail Studio Packshot CDN</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pre-enriched with 10,338+ studio photographs. Dual-key barcode indexing and persistent on-disk storage ensure instant O(1) rendering even in supermarket cellular dead-zones.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Watch className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Apple Watch Companion</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Glance at your active clinical dietary profile directly on your wrist with our native watchOS 10 companion app, keeping dietary goals front-of-mind while shopping or dining out.
            </p>
          </div>
        </div>
      </section>

      {/* PRIVACY PROMISE BANNER */}
      <section id="privacy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Shield className="w-3.5 h-3.5" />
              <span>Apple App Store Privacy Standard</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              We Don&apos;t Track Your Food. Because It&apos;s None of Our Business.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Most food scanner apps monetize your dietary habits by uploading scans and health conditions to data brokers. Ideat runs the entire 10,360+ item catalog, OCR text engine, and clinical rules directly in memory on your iPhone.
            </p>
            <div className="pt-2">
              <Link href="/privacy" className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4">
                Read our full Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-10 sm:p-16 space-y-6 relative overflow-hidden">
          <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden ring-2 ring-emerald-400/40 shadow-xl shadow-emerald-500/25">
            <Image src="/app-icon.png" alt="Ideat App" fill className="object-cover" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Take Control of Your Nutrition Today
          </h2>

          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Available on iPhone and Apple Watch. Zero registration required to start scanning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-slate-100 transition-all hover:scale-105"
            >
              <span>Download on the App Store</span>
            </a>

            <a
              href="https://github.com/theandrewmo/Ideat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-all"
            >
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
