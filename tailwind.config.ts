import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#050505",
        carbon: "#0b0d0f",
        graphite: "#15171b",
        iron: "#24272d",
        blood: "#7f1118",
        ember: "#c71f2d",
        bone: "#f3f1ed",
        smoke: "#9b9b9b"
      },
      boxShadow: {
        "luxury-red": "0 24px 90px rgba(199, 31, 45, 0.24)",
        "hard-panel": "0 22px 80px rgba(0, 0, 0, 0.48)"
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        "red-radial":
          "radial-gradient(circle at 70% 20%, rgba(199,31,45,.3), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
