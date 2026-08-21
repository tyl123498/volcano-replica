/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        page: "#F5F7FA",
        ink: {
          DEFAULT: "#1F2937",
          secondary: "#6B7280",
        },
        divider: "#E5E7EB",
        price: "#EF4444",
        tag: "#F59E0B",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "PingFang SC",
          "Microsoft YaHei",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.05), 0 4px 12px rgba(16,24,40,0.06)",
        hover: "0 12px 28px -8px rgba(37,99,235,0.18)",
        float: "0 20px 40px -12px rgba(37,99,235,0.28)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "cube-spin": {
          "0%": { transform: "rotateX(-22deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(-22deg) rotateY(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease both",
        float: "float 5s ease-in-out infinite",
        "cube-spin": "cube-spin 20s linear infinite",
        pulse: "pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
