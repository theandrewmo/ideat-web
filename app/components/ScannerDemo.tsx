"use client";

import React, { useState } from "react";

interface NutritionData {
  calories: number;
  totalCarbs: number;
  fiber: number;
  netCarbs: number;
  sugars: number;
  addedSugars: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  sodium: number;
  novaGroup: number;
  firstIngredientWholeGrain: boolean;
}

interface ProductSample {
  id: string;
  name: string;
  brand: string;
  category: string;
  barcode: string;
  imageEmoji: string;
  nutrition: NutritionData;
  ingredients: string;
  evaluations: Record<
    string,
    {
      verdict: "optimal" | "caution" | "contraindicated";
      scoreTitle: string;
      rationale: string[];
      authority: string;
    }
  >;
}

const PRODUCTS: ProductSample[] = [
  {
    id: "daves-bread",
    name: "21 Whole Grains & Seeds Organic Bread",
    brand: "Dave's Killer Bread",
    category: "Bakery / Whole Grain Bread",
    barcode: "013764027220",
    imageEmoji: "🍞",
    nutrition: {
      calories: 110,
      totalCarbs: 22,
      fiber: 5,
      netCarbs: 17,
      sugars: 5,
      addedSugars: 5,
      protein: 5,
      fat: 1.5,
      saturatedFat: 0,
      transFat: 0,
      sodium: 170,
      novaGroup: 3,
      firstIngredientWholeGrain: true,
    },
    ingredients:
      "Organic whole wheat flour, water, organic cracked whole wheat, organic 21 grains and seeds blend, organic cane sugar, organic molasses, sea salt.",
    evaluations: {
      metabolic: {
        verdict: "optimal",
        scoreTitle: "Harvard 10:1 Ratio Approved",
        rationale: [
          "Carbohydrate-to-fiber ratio is 4.4:1 (surpasses Harvard's 10:1 standard).",
          "Whole grain is verified as the primary first ingredient.",
          "5g dietary fiber per slice buffers postprandial glucose spike.",
        ],
        authority: "Harvard T.H. Chan & ADA Standards",
      },
      clean: {
        verdict: "optimal",
        scoreTitle: "NOVA 3 Artisanal Whole Food",
        rationale: [
          "Classified as NOVA 3 (processed whole grain bread, not ultra-processed).",
          "Zero emulsifiers, zero artificial preservatives, non-GMO verified.",
        ],
        authority: "University of São Paulo NOVA Framework",
      },
      cardio: {
        verdict: "optimal",
        scoreTitle: "Heart Healthy Whole Grains",
        rationale: [
          "Zero trans fat and zero saturated fat.",
          "Moderate sodium (170mg per slice falls safely within AHA limits).",
          "Whole seed lignans and soluble fiber promote LDL clearance.",
        ],
        authority: "American Heart Association (AHA)",
      },
      athletic: {
        verdict: "optimal",
        scoreTitle: "Complex Sustained Glycogen Replenishment",
        rationale: [
          "High complex carbohydrate density for steady glycogen storage.",
          "5g plant-based protein per slice.",
        ],
        authority: "International Society of Sports Nutrition (ISSN)",
      },
    },
  },
  {
    id: "reeses-puffs",
    name: "Reese's Peanut Butter Puffs Cereal",
    brand: "General Mills",
    category: "Breakfast Cereal",
    barcode: "016000122246",
    imageEmoji: "🥣",
    nutrition: {
      calories: 160,
      totalCarbs: 34,
      fiber: 1,
      netCarbs: 33,
      sugars: 12,
      addedSugars: 12,
      protein: 3,
      fat: 4.5,
      saturatedFat: 0.5,
      transFat: 0,
      sodium: 210,
      novaGroup: 4,
      firstIngredientWholeGrain: false,
    },
    ingredients:
      "Whole grain corn, sugar, Reese's peanut butter, dextrose, corn meal, corn syrup, canola oil, salt, cocoa, caramel color, trisodium phosphate, natural flavor.",
    evaluations: {
      metabolic: {
        verdict: "contraindicated",
        scoreTitle: "Severe Glycemic Load & Harvard Ratio Violation",
        rationale: [
          "Carbohydrate-to-fiber ratio is 34:1 (drastically exceeds Harvard 10:1 limit).",
          "Added sugars (12g per serving) exceed Harvard ceiling (>10g).",
          "High glycemic index induces rapid insulin spike.",
        ],
        authority: "Harvard T.H. Chan & ADA Standards",
      },
      clean: {
        verdict: "contraindicated",
        scoreTitle: "NOVA 4 Ultra-Processed Industrial Formulation",
        rationale: [
          "Industrial extrusion process using multiple fractionated starches.",
          "Contains industrial additives: dextrose, corn syrup, caramel color, trisodium phosphate.",
        ],
        authority: "University of São Paulo NOVA Framework",
      },
      cardio: {
        verdict: "caution",
        scoreTitle: "Excessive Added Sugars",
        rationale: [
          "12g added sugars accounts for 50% of the AHA daily recommended maximum for women.",
          "Minimal soluble fiber (1g) fails to protect arterial endothelium.",
        ],
        authority: "American Heart Association (AHA)",
      },
      athletic: {
        verdict: "caution",
        scoreTitle: "Transient Rapid Sugar Spike",
        rationale: [
          "Low protein density (3g per 160 kcal).",
          "Risk of reactive hypoglycemia during prolonged athletic exertion.",
        ],
        authority: "International Society of Sports Nutrition (ISSN)",
      },
    },
  },
  {
    id: "simply-orange",
    name: "100% Pure Squeezed Orange Juice (Pulp Free)",
    brand: "Simply Orange",
    category: "Beverage / Fruit Juice",
    barcode: "025000057703",
    imageEmoji: "🍊",
    nutrition: {
      calories: 110,
      totalCarbs: 26,
      fiber: 0,
      netCarbs: 26,
      sugars: 23,
      addedSugars: 0,
      protein: 2,
      fat: 0,
      saturatedFat: 0,
      transFat: 0,
      sodium: 0,
      novaGroup: 3,
      firstIngredientWholeGrain: false,
    },
    ingredients: "100% Pure Squeezed Pasteurized Orange Juice.",
    evaluations: {
      metabolic: {
        verdict: "caution",
        scoreTitle: "Liquid Free Sugars Without Fiber Matrix",
        rationale: [
          "Zero dietary fiber (0g) eliminates cellular matrix buffering.",
          "23g liquid fructose absorbed rapidly through hepatic portal vein.",
          "Caution advised for prediabetes, T2D, and metabolic syndrome.",
        ],
        authority: "Harvard T.H. Chan Free Sugars Guidelines",
      },
      clean: {
        verdict: "caution",
        scoreTitle: "NOVA 3 Mechanical Juice Extraction",
        rationale: [
          "Classified as NOVA 3: pure juice mechanically squeezed, but cellular plant structure removed.",
          "Not intact fruit (NOVA 1 whole orange has protective pectin).",
        ],
        authority: "NOVA Liquid Free Sugars Heuristics",
      },
      cardio: {
        verdict: "optimal",
        scoreTitle: "Zero Saturated Fat & Sodium",
        rationale: [
          "Rich in potassium and antioxidant vitamin C.",
          "Zero sodium and zero cholesterol.",
        ],
        authority: "American Heart Association (AHA)",
      },
      athletic: {
        verdict: "optimal",
        scoreTitle: "Rapid Post-Workout Glycogen Top-Off",
        rationale: [
          "High glycemic liquid sugars ideal immediately following intense endurance training.",
          "Electrolytes aid in immediate fluid uptake.",
        ],
        authority: "International Society of Sports Nutrition (ISSN)",
      },
    },
  },
  {
    id: "chobani-yogurt",
    name: "Plain Non-Fat Greek Yogurt",
    brand: "Chobani",
    category: "Dairy / Cultured Yogurt",
    barcode: "894700010045",
    imageEmoji: "🥛",
    nutrition: {
      calories: 90,
      totalCarbs: 6,
      fiber: 0,
      netCarbs: 6,
      sugars: 4,
      addedSugars: 0,
      protein: 16,
      fat: 0,
      saturatedFat: 0,
      transFat: 0,
      sodium: 65,
      novaGroup: 1,
      firstIngredientWholeGrain: false,
    },
    ingredients:
      "Cultured nonfat milk. Contains live and active cultures: S. thermophilus, L. bulgaricus, L. acidophilus, Bifidus, L. casei, and L. rhamnosus.",
    evaluations: {
      metabolic: {
        verdict: "optimal",
        scoreTitle: "Exceptional Protein Density & Low Glycemic Impact",
        rationale: [
          "16g high-bioavailability protein per 90 calories (71% protein by energy).",
          "Zero added sugars (4g naturally occurring milk lactose).",
          "Minimal postprandial glucose and insulin response.",
        ],
        authority: "ADA Standards of Medical Care in Diabetes",
      },
      clean: {
        verdict: "optimal",
        scoreTitle: "NOVA 1 Unprocessed Fermented Whole Food",
        rationale: [
          "Single core ingredient: cultured pasteurized nonfat milk.",
          "Contains 6 strains of live active probiotic cultures.",
          "Zero thickeners, starches, artificial sweeteners, or preservatives.",
        ],
        authority: "University of São Paulo NOVA Framework",
      },
      cardio: {
        verdict: "optimal",
        scoreTitle: "Zero Saturated Fat & Low Sodium",
        rationale: [
          "Fat-free dairy formulation with just 65mg sodium.",
          "Fermented dairy peptides support healthy endothelial vascular tone.",
        ],
        authority: "American Heart Association (AHA)",
      },
      athletic: {
        verdict: "optimal",
        scoreTitle: "Gold-Standard Muscle Protein Synthesis (MPS)",
        rationale: [
          "High leucine and complete essential amino acid profile.",
          "High protein-to-calorie ratio optimizes lean muscle recovery.",
        ],
        authority: "International Society of Sports Nutrition (ISSN)",
      },
    },
  },
];

const LENSES = [
  { id: "metabolic", name: "Metabolic Health", icon: "🩸", authority: "ADA / Harvard" },
  { id: "clean", name: "Clean Non-UPF", icon: "🌱", authority: "NOVA 1-4" },
  { id: "cardio", name: "Cardiovascular", icon: "🫀", authority: "AHA Standards" },
  { id: "athletic", name: "Athletic Performance", icon: "⚡", authority: "ISSN Guidelines" },
];

export default function ScannerDemo() {
  const [selectedProductId, setSelectedProductId] = useState<string>("daves-bread");
  const [activeLensId, setActiveLensId] = useState<string>("metabolic");
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const activeEvaluation =
    selectedProduct.evaluations[activeLensId] || selectedProduct.evaluations.metabolic;

  const handleSelectProduct = (id: string) => {
    setIsScanning(true);
    setSelectedProductId(id);
    setTimeout(() => {
      setIsScanning(false);
    }, 450);
  };

  const getVerdictBadge = (verdict: "optimal" | "caution" | "contraindicated") => {
    switch (verdict) {
      case "optimal":
        return {
          label: "Optimal",
          bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
          dot: "bg-emerald-400",
        };
      case "caution":
        return {
          label: "Caution",
          bg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
          dot: "bg-amber-400",
        };
      case "contraindicated":
        return {
          label: "Contraindicated",
          bg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
          dot: "bg-rose-400",
        };
    }
  };

  const badge = getVerdictBadge(activeEvaluation.verdict);

  return (
    <section className="relative py-20 border-y border-white/5 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Web Interactive Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Try the Optical Scanner & Clinical Engine
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Click any retail item below to simulate a live GS1 barcode scan and watch the 100% on-device clinical engine evaluate real food metrics in real time.
          </p>
        </div>

        {/* Product Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(prod.id)}
                className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-slate-800/90 border-emerald-500/60 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30"
                    : "bg-slate-900/50 border-white/10 hover:border-white/20 hover:bg-slate-900"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {prod.imageEmoji}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-400 truncate">{prod.brand}</div>
                  <div className="text-sm font-semibold text-white truncate">{prod.name}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Simulated Hardware Viewfinder & Barcode (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md">
            {/* Viewfinder Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Optical Barcode Viewfinder
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                GS1 Modulo-10 Valid
              </span>
            </div>

            {/* Viewfinder Target Container */}
            <div className="relative aspect-square max-w-[340px] mx-auto bg-slate-950 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden">
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400" />

              {/* Laser Line Scanning Animation */}
              <div
                className={`absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] transition-all duration-700 ${
                  isScanning ? "top-1/2 opacity-100 scale-x-100" : "top-1/4 opacity-75"
                }`}
                style={{
                  animation: "scanPulse 2.5s ease-in-out infinite alternate",
                }}
              />

              {/* Product Visual inside Viewfinder */}
              <div className="text-6xl mb-4 transform transition-transform duration-300 hover:scale-110 select-none">
                {selectedProduct.imageEmoji}
              </div>

              {/* Barcode Graphic Representation */}
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                {/* Visual Barcode Bars */}
                <div className="h-10 flex items-center justify-center gap-[3px] mb-2 px-2 overflow-hidden">
                  {[4, 2, 5, 2, 6, 3, 2, 5, 3, 2, 7, 2, 4, 3, 5, 2, 6, 2, 3, 4, 2, 5, 3, 4, 2, 6].map(
                    (w, i) => (
                      <div
                        key={i}
                        className={`h-full bg-slate-300 ${i % 3 === 0 ? "opacity-90" : "opacity-60"}`}
                        style={{ width: `${w}px` }}
                      />
                    )
                  )}
                </div>
                <div className="text-xs font-mono tracking-widest text-slate-300">
                  {selectedProduct.barcode}
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm font-bold text-white">{selectedProduct.brand}</div>
                <div className="text-xs text-slate-400">{selectedProduct.name}</div>
              </div>
            </div>

            {/* Scan Metric Indicators */}
            <div className="grid grid-cols-3 gap-2 mt-6 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-slate-400 text-[10px]">Checksum</div>
                <div className="text-emerald-400 font-mono font-semibold">PASS</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-slate-400 text-[10px]">Debounce</div>
                <div className="text-slate-200 font-mono font-semibold">2 Frames</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-slate-400 text-[10px]">Engine</div>
                <div className="text-slate-200 font-mono font-semibold">On-Device</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Clinical Evaluation & Lens Switcher (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            {/* Health Lens Selector Dropdown/Tabs */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Active Health Lens
                </span>
                <span className="text-xs text-slate-500">Toggle lens to re-evaluate</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LENSES.map((lens) => {
                  const isActive = lens.id === activeLensId;
                  return (
                    <button
                      key={lens.id}
                      onClick={() => setActiveLensId(lens.id)}
                      className={`flex flex-col p-2.5 rounded-xl border text-left transition-all ${
                        isActive
                          ? "bg-emerald-500/10 border-emerald-500 text-white shadow-sm"
                          : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-950"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-sm font-semibold mb-1">
                        <span>{lens.icon}</span>
                        <span className="truncate">{lens.name}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">{lens.authority}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clinical Decision Banner */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${badge.bg}`}>
                  <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                  {badge.label.toUpperCase()}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {activeEvaluation.authority}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {activeEvaluation.scoreTitle}
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {activeEvaluation.rationale.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 12-Metric Nutrition Table Grid */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Comprehensive Nutrition Panel (Per Serving)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Calories</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.calories}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Total Carbs</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.totalCarbs}g</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/30 bg-emerald-950/10">
                  <div className="text-[11px] text-emerald-400 font-medium">Net Carbs (OCR)</div>
                  <div className="text-lg font-bold text-emerald-400">{selectedProduct.nutrition.netCarbs}g</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Fiber</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.fiber}g</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Protein</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.protein}g</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Added Sugars</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.addedSugars}g</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">Sodium</div>
                  <div className="text-lg font-bold text-white">{selectedProduct.nutrition.sodium}mg</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                  <div className="text-[11px] text-slate-400">NOVA Group</div>
                  <div className="text-lg font-bold text-emerald-400">Group {selectedProduct.nutrition.novaGroup}</div>
                </div>
              </div>
            </div>

            {/* Clean Ingredients Statement */}
            <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Ingredients Statement
              </div>
              <div className="text-xs text-slate-300 leading-relaxed font-mono">
                {selectedProduct.ingredients}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
