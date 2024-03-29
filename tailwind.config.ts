import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#2F80ED",
"primary-focus": "#2F80ED",
"primary-content": "#ffffff",
"secondary": "#2F80ED",
"secondary-focus": "#2F80ED",
"secondary-content": "#ffffff",
"accent": "#2F80ED",
"accent-focus": "#2F80ED",
        }
      },
    ],
  },
};
export default config;
