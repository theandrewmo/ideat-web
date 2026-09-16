# Ideat Web 🌐

> **Official Product Website & Legal Compliance Pages for Ideat (iOS & watchOS)**  
> Built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS.

Live at: **[https://ideat.app](https://ideat.app)** (or your Vercel / Cloudflare deployment)

---

## 🚀 Features

* **Landing Page (`/`)**:
  * Hero showcase with Neon Biometric App Icon and device mockup.
  * Clinical Trust Bar with 8 scientific authorities (ADA, AHA, Harvard Chan, AICR, AGA, Celiac Disease Foundation, ISSN, NOVA).
  * Interactive 9-Profile Showcase with live food evaluations, evidence rationales, and dietary swaps.
  * Core technology architecture breakdown (GS1 Modulo-10, Apple Vision OCR, Harvard 10:1 ratio, Retail packshots, watchOS companion).
* **Legal & Compliance Pages**:
  * **`/privacy`**: Comprehensive Privacy Policy compliant with Apple App Store Review Guideline 5.1.1 (Zero-Telemetry, 100% on-device processing).
  * **`/terms`**: Terms of Service & Clinical Medical Disclaimer compliant with Apple App Store Review Guideline 1.4.1.
* **SEO & Social Sharing**:
  * Rich OpenGraph and Twitter Card metadata pre-configured with 1024x1024 high-res icon.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

---

## 📦 Production Build

```bash
# Compile and generate optimized static routes
npm run build

# Preview production build locally
npm run start
```

---

## ☁️ Deployment (Vercel / Cloudflare Pages)

### Deploy to Vercel (Recommended — 1 Click)
1. Go to **[vercel.com/new](https://vercel.com/new)**.
2. Select your repository: **`theandrewmo/ideat-web`**.
3. Click **Deploy**. Vercel will automatically detect Next.js and deploy to a free global edge CDN with automatic HTTPS.
4. Add your custom domain (e.g. `ideat.app`) under Project Settings $\rightarrow$ Domains.
