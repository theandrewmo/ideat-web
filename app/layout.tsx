import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ideat-web.vercel.app"),
  title: "Ideat — Evidence-Based Food & Nutrition Evaluation for iOS and watchOS",
  description: "Real-time packaging OCR, GS1 barcode scanning, and individualized clinical nutrition analysis powered by 10,360+ on-device USDA items and guidelines from ADA, AHA, Harvard T.H. Chan, and AICR.",
  keywords: ["nutrition scanner", "food scanner", "NOVA food classification", "Harvard 10:1 ratio", "celiac safe", "diabetes glucose scanner", "ultra processed food", "on-device OCR"],
  authors: [{ name: "Ideat Team" }],
  openGraph: {
    title: "Ideat — Precision Nutrition & Food Transparency",
    description: "Scan packaging, evaluate ingredients against 9 clinical health profiles, and uncover ultra-processed foods 100% on-device.",
    url: "https://ideat-web.vercel.app",
    siteName: "Ideat",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Ideat App Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideat — Precision Nutrition & Food Transparency",
    description: "Real-time packaging OCR & clinical food evaluation for iOS and watchOS. 100% on-device & private.",
    images: ["/app-icon.png"],
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-slate-950 text-slate-100">
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-white`}>
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/30 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/app-icon.png"
                  alt="Ideat App Icon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                  Ideat <span className="text-emerald-400 font-normal text-xs px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">iOS & watchOS</span>
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#clinical-profiles" className="hover:text-white transition-colors">9 Health Profiles</a>
              <a href="#standards" className="hover:text-white transition-colors">Clinical Standards</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <Link href="/privacy" className="hover:text-white transition-colors">Legal</Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-md shadow-emerald-500/25 transition-all hover:scale-105"
              >
                Get Ideat
              </a>
            </div>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-850 bg-slate-950 py-12 text-slate-400 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
              <div className="space-y-3 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-emerald-400/30">
                    <Image src="/app-icon.png" alt="Ideat" fill className="object-cover" />
                  </div>
                  <span className="font-bold text-lg text-white">Ideat</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                  Precision Nutrition & Food Transparency. Real-time on-device packaging OCR and barcode scanning powered by 10,360+ verified USDA food items and clinical consensus standards.
                </p>
                <div className="text-xs text-slate-500">
                  Zero cloud telemetry • 100% on-device • Complete privacy
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Clinical Authorities</h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>American Diabetes Association (ADA)</li>
                  <li>American Heart Association (AHA)</li>
                  <li>Harvard T.H. Chan Public Health</li>
                  <li>AICR / WCRF Cancer Research</li>
                  <li>American Gastroenterological (AGA)</li>
                  <li>Celiac Disease Foundation (CDF)</li>
                  <li>Univ. of São Paulo NOVA Protocol</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Legal & Compliance</h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                  </li>
                  <li>
                    <a href="https://github.com/theandrewmo/Ideat" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub Repository</a>
                  </li>
                  <li>
                    <a href="https://github.com/theandrewmo/Ideat/wiki" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Documentation Wiki</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>&copy; {new Date().getFullYear()} Ideat. All rights reserved.</p>
              <p className="max-w-xl text-center sm:text-right text-slate-600">
                Medical Disclaimer: Ideat provides evidence-based nutritional calculations and consensus guideline evaluations for informational purposes. It is not intended as medical advice or clinical diagnosis.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
