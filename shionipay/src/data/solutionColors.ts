export type SolColor = {
  tabOn: string; tabOff: string; panel: string; text: string; bar: string; soft: string; ring: string; gradient: string; hex: string;
};

/** One distinct colour per industry. Warm + fresh palette, no blue/violet. */
export const solutionColors: Record<string, SolColor> = {
  banks: {
    tabOn: "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-600/30",
    tabOff: "bg-teal-50 border-teal-100 text-teal-700 hover:bg-teal-100",
    panel: "bg-gradient-to-br from-teal-50 via-white to-emerald-50 border-teal-100",
    text: "text-teal-700", bar: "bg-teal-600", soft: "bg-teal-50", ring: "ring-teal-100",
    gradient: "from-teal-600 to-emerald-500", hex: "#0D9488",
  },
  fintechs: {
    tabOn: "bg-lime-600 border-lime-600 text-white shadow-lg shadow-lime-600/30",
    tabOff: "bg-lime-50 border-lime-100 text-lime-800 hover:bg-lime-100",
    panel: "bg-gradient-to-br from-lime-50 via-white to-yellow-50 border-lime-100",
    text: "text-lime-700", bar: "bg-lime-600", soft: "bg-lime-50", ring: "ring-lime-100",
    gradient: "from-lime-600 to-yellow-400", hex: "#65A30D",
  },

  merchants: {
    tabOn: "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30",
    tabOff: "bg-orange-50 border-orange-100 text-orange-700 hover:bg-orange-100",
    panel: "bg-gradient-to-br from-orange-50 via-white to-amber-50 border-orange-100",
    text: "text-orange-600", bar: "bg-orange-500", soft: "bg-orange-50", ring: "ring-orange-100",
    gradient: "from-orange-500 to-amber-400", hex: "#F97316",
  },
  nbfcs: {
    tabOn: "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/30",
    tabOff: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100",
    panel: "bg-gradient-to-br from-emerald-50 via-white to-lime-50 border-emerald-100",
    text: "text-emerald-700", bar: "bg-emerald-600", soft: "bg-emerald-50", ring: "ring-emerald-100",
    gradient: "from-emerald-600 to-lime-500", hex: "#059669",
  },
  enterprises: {
    tabOn: "bg-neutral-900 border-neutral-900 text-white shadow-lg shadow-black/25",
    tabOff: "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200",
    panel: "bg-gradient-to-br from-neutral-100 via-white to-amber-50 border-neutral-200",
    text: "text-neutral-900", bar: "bg-neutral-900", soft: "bg-neutral-100", ring: "ring-neutral-200",
    gradient: "from-neutral-900 to-neutral-600", hex: "#171717",
  },
  education: {
    tabOn: "bg-pink-600 border-pink-600 text-white shadow-lg shadow-pink-600/30",
    tabOff: "bg-pink-50 border-pink-100 text-pink-700 hover:bg-pink-100",
    panel: "bg-gradient-to-br from-pink-50 via-white to-orange-50 border-pink-100",
    text: "text-pink-600", bar: "bg-pink-600", soft: "bg-pink-50", ring: "ring-pink-100",
    gradient: "from-pink-600 to-orange-400", hex: "#DB2777",
  },
};

export const solColor = (slug: string) => solutionColors[slug] ?? solutionColors.banks;
