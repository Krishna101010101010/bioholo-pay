
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        cyber: {
          black: '#080B1A',
          dark: '#0C1E5B',
          cyan: '#41EAD4',
          purple: '#B537F2',
          blue: '#0A84FF',
          pink: '#FF375F',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1)" 
          },
          "50%": { 
            opacity: "0.8",
            filter: "brightness(1.3)" 
          },
        },
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "50%": { transform: "rotateY(180deg) rotateX(10deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(0deg)" },
        },
        "scanning": {
          "0%": { 
            transform: "translateY(0)",
            opacity: "0"
          },
          "50%": { 
            opacity: "0.8",
          },
          "100%": { 
            transform: "translateY(100%)",
            opacity: "0"
          },
        },
        "data-flow": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "hover-card": {
          "0%, 100%": { transform: "translateZ(0)" },
          "50%": { transform: "translateZ(20px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "page-transition": {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "rotate-3d": "rotate-3d 15s linear infinite",
        "scanning": "scanning 2s ease-in-out infinite",
        "data-flow": "data-flow 15s linear infinite",
        "hover-card": "hover-card 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "page-transition": "page-transition 0.4s ease-out",
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(65, 234, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(65, 234, 212, 0.1) 1px, transparent 1px)",
        'cyber-radial': "radial-gradient(circle, rgba(10, 132, 255, 0.1) 10%, transparent 70%)",
        'data-stream': "linear-gradient(45deg, rgba(65, 234, 212, 0.05) 25%, transparent 25%, transparent 50%, rgba(65, 234, 212, 0.05) 50%, rgba(65, 234, 212, 0.05) 75%, transparent 75%, transparent)",
        'neon-glow': "linear-gradient(to right, rgba(65, 234, 212, 0), rgba(65, 234, 212, 0.5), rgba(65, 234, 212, 0))",
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(65, 234, 212, 0.5), 0 0 20px rgba(65, 234, 212, 0.2)',
        'neon-purple': '0 0 5px rgba(181, 55, 242, 0.5), 0 0 20px rgba(181, 55, 242, 0.2)',
        'neon-blue': '0 0 5px rgba(10, 132, 255, 0.5), 0 0 20px rgba(10, 132, 255, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Consolas', 'monospace'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
