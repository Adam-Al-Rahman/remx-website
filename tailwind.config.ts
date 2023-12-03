import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // don't include @/lib here
  ],
  theme: {
    extend: {
      screens: {
        sx: '1920px',
      },
      colors: {
        'rmx-mirage': "#161B22",
        'rmx-grey-charcoal': "#373E40",
        'rmx-dune': "#342E37",
        'rmx-baltic-sea': "#24292E",
        'rmx-white': '#a6adbb',
        'rmx-tamahagane': '#484f51',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
