"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, Sparkles, ShieldCheck, Heart, Activity, Wheat, Sparkle, Flame, Dumbbell, Apple, Search } from "lucide-react";

interface HealthProfileDemo {
  id: string;
  title: string;
  category: string;
  emoji: string;
  authority: string;
  sampleProduct: string;
  sampleBrand: string;
  verdict: "optimal" | "caution" | "contraindicated";
  verdictTitle: string;
  rationale: string;
  flagged: string[];
  swaps: string[];
  metrics: {
    calories: number;
    carbs: number;
    netCarbs: number;
    fiber: number;
    ratio: string;
    nova: string;
  };
}

const PROFILES: HealthProfileDemo[] = [
  {
    id: "metabolic",
    title: "Metabolic Health & Glucose",
    category: "Clinical Conditions",
    emoji: "📉",
    authority: "American Diabetes Association (ADA) & Harvard T.H. Chan",
    sampleProduct: "Classic White Sandwich Bread",
    sampleBrand: "Wonder Bread",
    verdict: "caution",
    verdictTitle: "Refined High-GI Flour & Poor Ratio (31.2:1)",
    rationale: "Fails Harvard T.H. Chan 10:1 carb-to-fiber standard (<1g fiber per 10g carbs). Refined flour matrix stripped of bran and germ triggers rapid duodenal starch hydrolysis and postprandial glucose excursions.",
    flagged: ["Enriched Bleached Flour", "Carb-to-Fiber Ratio: 31.2:1", "High Glycemic Load (GL 16)"],
    swaps: ["100% Sprouted Whole Grain Bread", "Seed & Flaxseed Loaf", "Almond Flour Wraps"],
    metrics: { calories: 140, carbs: 25, netCarbs: 24, fiber: 0.8, ratio: "31.2:1", nova: "NOVA 4" },
  },
  {
    id: "cardiovascular",
    title: "Heart & Cardiovascular",
    category: "Clinical Conditions",
    emoji: "❤️",
    authority: "American Heart Association (AHA) & DASH Trials",
    sampleProduct: "Extra Crispy Chicken Nuggets",
    sampleBrand: "Commercial Retail Brand",
    verdict: "caution",
    verdictTitle: "High Saturated Fat & Elevated DASH Sodium",
    rationale: "Delivers 6.5g saturated fat per serving (exceeds AHA ceiling of ≤3g/serving) and 780mg sodium with a Sodium-to-Potassium ratio of 3.4:1, opposing DASH vascular guidelines.",
    flagged: ["Saturated Fat: 6.5g", "Sodium: 780mg (DASH Goal <400mg)", "Na:K Ratio: 3.4:1"],
    swaps: ["Wild Alaskan Baked Salmon", "Skinless Herb-Roasted Chicken Breast", "Extra Virgin Olive Oil Marinade"],
    metrics: { calories: 290, carbs: 16, netCarbs: 15, fiber: 1.0, ratio: "16.0:1", nova: "NOVA 4" },
  },
  {
    id: "celiac",
    title: "Celiac Disease & Gluten-Free",
    category: "Clinical Conditions",
    emoji: "🌾",
    authority: "Celiac Disease Foundation & FDA 21 CFR 101.91",
    sampleProduct: "Multi-Grain Energy Crisp Crackers",
    sampleBrand: "Retail Snack Brand",
    verdict: "contraindicated",
    verdictTitle: "Contains Wheat & Barley (Gluten Trigger)",
    rationale: "Contains whole wheat flour and malted barley extract. Triggers autoimmune mucosal villous atrophy in the small intestine. Strict <20 ppm avoidance required.",
    flagged: ["Whole Wheat Flour", "Malted Barley Extract", "Uncertified Facility Line"],
    swaps: ["Certified Gluten-Free Almond Flour Crackers", "100% Rice & Quinoa Crisps"],
    metrics: { calories: 130, carbs: 22, netCarbs: 20, fiber: 2.0, ratio: "11.0:1", nova: "NOVA 3" },
  },
  {
    id: "clean",
    title: "Clean Food & Non-UPF",
    category: "Everyday & Lifestyle",
    emoji: "🌱",
    authority: "University of São Paulo NOVA Protocol",
    sampleProduct: "Chewy Strawberry Marshmallow Snack Bar",
    sampleBrand: "Confectionery Brands Inc",
    verdict: "contraindicated",
    verdictTitle: "Ultra-Processed Food (NOVA 4)",
    rationale: "Formulated with industrial cosmetic additives, artificial colorings (Red 40), and synthetic texturizing gums not found in domestic culinary preparation.",
    flagged: ["High-Fructose Corn Syrup", "Red 40 Dye", "Soy Lecithin Emulsifier", "Artificial Flavoring"],
    swaps: ["Fresh Organic Strawberries with Raw Walnuts", "100% Fruit & Date Pressed Bar"],
    metrics: { calories: 160, carbs: 32, netCarbs: 31, fiber: 1.0, ratio: "32.0:1", nova: "NOVA 4" },
  },
  {
    id: "cancer",
    title: "Cancer Survivorship",
    category: "Clinical Conditions",
    emoji: "🎗️",
    authority: "AICR / WCRF Global Cancer Prevention Guidelines",
    sampleProduct: "Cured Hard Salami & Pepperoni",
    sampleBrand: "Deli Provisions Co",
    verdict: "contraindicated",
    verdictTitle: "Contains IARC Group 1 Carcinogenic Preservatives",
    rationale: "Sodium nitrite in processed meats interacts with dietary amines in the gut to generate carcinogenic N-nitroso compounds associated with colorectal and gastric recurrence risk.",
    flagged: ["Sodium Nitrite", "Sodium Erythorbate", "IARC Processed Red Meat"],
    swaps: ["100% Uncured Organic Turkey Breast", "Wild-Caught Salmon Fillet"],
    metrics: { calories: 220, carbs: 1, netCarbs: 1, fiber: 0.0, ratio: "N/A", nova: "NOVA 4" },
  },
  {
    id: "gut",
    title: "IBD & Gut Barrier Integrity",
    category: "Clinical Conditions",
    emoji: "🦠",
    authority: "American Gastroenterological Association (AGA)",
    sampleProduct: "Low-Fat Vanilla Pudding Dessert",
    sampleBrand: "Dairy Treats Co",
    verdict: "contraindicated",
    verdictTitle: "Contains Mucosal Barrier Disruptors",
    rationale: "Contains Polysorbate 80 and Carrageenan. These synthetic emulsifiers thin the protective MUC2 intestinal mucus barrier and disrupt epithelial tight junctions, promoting bacterial translocation.",
    flagged: ["Polysorbate 80", "Carrageenan", "Titanium Dioxide (TiO2)"],
    swaps: ["Unsweetened Plain Greek Yogurt", "Chia Seed Pudding with Pure Vanilla Pod"],
    metrics: { calories: 150, carbs: 24, netCarbs: 24, fiber: 0.0, ratio: "N/A", nova: "NOVA 4" },
  },
  {
    id: "weight",
    title: "Weight Management & Satiety",
    category: "Everyday & Lifestyle",
    emoji: "⚖️",
    authority: "Holt Satiety Index & Rolls Energy Density Research",
    sampleProduct: "100% Orange Juice with Pulp",
    sampleBrand: "Pure Orchard Brand",
    verdict: "caution",
    verdictTitle: "Liquid Caloric Density / Satiety Bypass",
    rationale: "Liquid free sugars bypass oral mastication, delivering 22g rapid fructose without triggering the cephalic digestion phase or satiety hormone secretion (GLP-1/PYY).",
    flagged: ["Liquid Free Sugars: 22g", "No Intact Cellular Fiber Matrix", "Zero Chewing Satiety"],
    swaps: ["Whole Fresh Florida Oranges with Intact Fiber", "Sparkling Water with Fresh Lemon Squeeze"],
    metrics: { calories: 110, carbs: 26, netCarbs: 25, fiber: 0.5, ratio: "52.0:1", nova: "NOVA 3" },
  },
  {
    id: "fitness",
    title: "Fitness & Muscle Recovery",
    category: "Everyday & Lifestyle",
    emoji: "💪",
    authority: "International Society of Sports Nutrition (ISSN)",
    sampleProduct: "Double Chocolate Protein Bar",
    sampleBrand: "Optima Nutrition",
    verdict: "optimal",
    verdictTitle: "High Protein Caloric Density (38% Protein)",
    rationale: "Delivers 20g high-biological-value protein (38% of total calories) with 10g dietary fiber, satisfying ISSN guidelines for muscle protein synthesis and post-workout glycemic control.",
    flagged: [],
    swaps: [],
    metrics: { calories: 210, carbs: 22, netCarbs: 12, fiber: 10.0, ratio: "2.2:1", nova: "NOVA 3" },
  },
];

export default function ProfileShowcase() {
  const [activeProfile, setActiveProfile] = useState<HealthProfileDemo>(PROFILES[0]);

  const getVerdictBadge = (verdict: "optimal" | "caution" | "contraindicated") => {
    switch (verdict) {
      case "optimal":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> Optimal Guideline Match
          </span>
        );
      case "caution":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <AlertTriangle className="w-3.5 h-3.5" /> Clinical Caution
          </span>
        );
      case "contraindicated":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5" /> Contraindicated / Flagged
          </span>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Profile Selector Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {PROFILES.map((p) => {
          const isSelected = p.id === activeProfile.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProfile(p)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isSelected
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/50 scale-105"
                  : "bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              <span>{p.emoji}</span>
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Scan Result Card */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <span>{activeProfile.emoji}</span>
              <span>{activeProfile.title}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-normal">{activeProfile.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeProfile.sampleProduct}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{activeProfile.sampleBrand}</p>
          </div>

          <div>{getVerdictBadge(activeProfile.verdict)}</div>
        </div>

        {/* Scientific Evidence Box */}
        <div className="py-6 space-y-4">
          <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Evidence Rationale & Authority Citation</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {activeProfile.rationale}
            </p>
            <div className="mt-2 text-xs text-emerald-400/90 font-medium">
              Source: {activeProfile.authority}
            </div>
          </div>

          {/* Macro Invariants Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Calories</div>
              <div className="text-sm font-bold text-white mt-0.5">{activeProfile.metrics.calories}</div>
            </div>
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Carbs</div>
              <div className="text-sm font-bold text-white mt-0.5">{activeProfile.metrics.carbs}g</div>
            </div>
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-emerald-400/90 uppercase font-semibold">Net Carbs</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">{activeProfile.metrics.netCarbs}g</div>
            </div>
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Fiber</div>
              <div className="text-sm font-bold text-white mt-0.5">{activeProfile.metrics.fiber}g</div>
            </div>
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">10:1 Ratio</div>
              <div className="text-sm font-bold text-white mt-0.5">{activeProfile.metrics.ratio}</div>
            </div>
            <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800/60">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">NOVA Tier</div>
              <div className="text-sm font-bold text-white mt-0.5">{activeProfile.metrics.nova}</div>
            </div>
          </div>

          {/* Trigger Flags & Swaps */}
          {activeProfile.flagged.length > 0 && (
            <div className="pt-2">
              <div className="text-xs font-semibold text-rose-400/90 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Flagged Trigger Ingredients
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProfile.flagged.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeProfile.swaps.length > 0 && (
            <div className="pt-2">
              <div className="text-xs font-semibold text-emerald-400/90 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Clinical Dietary Swaps
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProfile.swaps.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
