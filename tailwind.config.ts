import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {},
    plugins: [require("@tailwindcss/typography")],
    extend: {
        utilities: {
            ".scrollbar-hide": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            },
        },
        boxShadow: {
            apple: "0px 1px 2.5px rgba(0, 122, 255, 0.24), 0px 0px 0px 0.5px rgba(0, 122, 255, 0.12)",
        },
    },
};

export default config;
