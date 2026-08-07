import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#263238",
        cream: "#FFFCF7",
        peach: "#FBE4D2",
        sunshine: "#F9C74F",
        mint: "#CDE9DD",
        sky: "#D9EEF6",
        coral: "#E9856B",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(38, 50, 56, 0.08)",
        lift: "0 18px 45px rgba(38, 50, 56, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
