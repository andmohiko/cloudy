module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D04DD8",
          "secondary": "#F5A0E3",
          "accent": "#E3CF72",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#d9f99d",
          "warning": "#fca5a5",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
