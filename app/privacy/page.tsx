import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, EyeOff, ServerOff, KeyRound } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Ideat",
  description: "Official Privacy Policy for Ideat iOS and watchOS application.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" /> App Store Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: September 16, 2026 • Compliant with Apple App Store Review Guideline 5.1.1
          </p>
        </div>

        {/* Privacy Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <ServerOff className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="text-sm font-bold text-white">100% On-Device</h3>
            <p className="text-xs text-slate-400 mt-1">Barcode matching and packaging OCR run entirely in your iPhone&apos;s memory.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <EyeOff className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="text-sm font-bold text-white">Zero Trackers</h3>
            <p className="text-xs text-slate-400 mt-1">No third-party analytics, ad brokers, or telemetry SDKs installed.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <KeyRound className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="text-sm font-bold text-white">Encrypted Keychain</h3>
            <p className="text-xs text-slate-400 mt-1">User credentials remain protected in the hardware Secure Enclave.</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Introduction & Overview</h2>
            <p>
              Ideat (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is committed to protecting your privacy. This Privacy Policy explains our practices regarding data collection, processing, and storage when using the Ideat mobile application for iOS and watchOS.
            </p>
            <p>
              Our guiding architectural philosophy is simple: <strong className="text-white">your food choices and clinical health conditions are confidential personal information</strong>. Ideat is engineered from the ground up to operate offline with zero cloud dependency.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Information We Do NOT Collect</h2>
            <p>We do not collect, store, sell, or transmit any of the following data:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Scanned product barcodes, timestamps, or grocery browsing history.</li>
              <li>Photographs captured for Packaging OCR (images are analyzed in volatile RAM and immediately discarded).</li>
              <li>Your selected dietary health profiles (e.g., Celiac Disease, Metabolic Health, Cancer Survivorship).</li>
              <li>Location data or GPS coordinates.</li>
              <li>Advertising identifiers (IDFA) or third-party behavioral analytics.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Device Permissions & How They Are Used</h2>
            <p>Ideat requests the following system permissions exclusively to deliver core features:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>
                <strong className="text-white">Camera Access (<code className="text-xs text-emerald-400">NSCameraUsageDescription</code>):</strong> Used solely to detect UPC/EAN barcodes in real time and capture packaging for Apple Vision text recognition. Video frames are processed locally on-device and are never uploaded or streamed to external servers.
              </li>
              <li>
                <strong className="text-white">Face ID / Touch ID (<code className="text-xs text-emerald-400">LocalAuthentication</code>):</strong> Used to authorize passkey sign-in securely via your device&apos;s Secure Enclave. Biometric data is managed strictly by iOS and is never accessible to the app.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Account Credentials & Keychain Storage</h2>
            <p>
              Ideat provides an anonymous <strong>Guest Mode</strong> requiring zero account creation. If you choose to authenticate via <strong>Sign in with Apple</strong> or <strong>Passkeys</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Your identity token and user ID are stored securely in the iOS Keychain using the <code className="text-xs text-emerald-400">kSecAttrAccessibleAfterFirstUnlock</code> attribute.</li>
              <li>Credentials are protected by hardware encryption and are scoped exclusively to the Ideat bundle identifier.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. Third-Party Services & Analytics</h2>
            <p>
              Ideat contains <strong>zero third-party analytics libraries, advertising frameworks, or tracker SDKs</strong> (no Google Analytics, Facebook SDK, Mixpanel, or Firebase). The application does not communicate with any external tracking endpoints.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">6. Contact & Data Protection Officer</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy, please reach out via our GitHub repository:
            </p>
            <p>
              <a
                href="https://github.com/theandrewmo/Ideat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline font-medium"
              >
                https://github.com/theandrewmo/Ideat
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
