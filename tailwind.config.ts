export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        "body-gray": "#4b4b4b",
        "muted-gray": "#afafaf",
        "hover-gray": "#e2e2e2",
        "hover-light": "#f3f3f3",
        "chip-gray": "#efefef",
        paper: "#ffffff",
        ink: "#000000",
        muted: "#4b4b4b",
        line: "#e2e2e2",
        forest: "#000000",
        copper: "#4b4b4b",
        soft: "#efefef",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.16)",
        floating: "0 2px 8px rgba(0, 0, 0, 0.16)",
        pressed: "inset 0 0 0 999px rgba(0, 0, 0, 0.08)",
        soft: "0 4px 16px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        card: "8px",
        featured: "12px",
        pill: "999px",
      },
      maxWidth: {
        content: "1136px",
      },
      fontSize: {
        display: ["3.25rem", { lineHeight: "1.23", fontWeight: "900" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(.22,.97,.44,1) both",
        ticker: "ticker 22s linear infinite",
      },
    },
  },
};
