import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#22C55E",
          100: "#DCFCE7",
          500: "#22C55E",
          900: "#14532D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
