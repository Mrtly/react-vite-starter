import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        test: "120px",
      },
    },
  },
  plugins: [
    // ie. componentClasses
  ],
};

export default config;
