import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "0.75rem",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#f8fafc",
            foreground: "#1e293b",
            primary: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              800: "#3730a3",
              900: "#312e81",
              DEFAULT: "#6366f1",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
              DEFAULT: "#64748b",
              foreground: "#ffffff"
            },
            success: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e",
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
              DEFAULT: "#22c55e",
              foreground: "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            background: "#0f172a",
            foreground: "#f1f5f9",
            primary: {
              50: "#312e81",
              100: "#3730a3",
              200: "#4338ca",
              300: "#4f46e5",
              400: "#6366f1",
              500: "#818cf8",
              600: "#a5b4fc",
              700: "#c7d2fe",
              800: "#e0e7ff",
              900: "#eef2ff",
              DEFAULT: "#818cf8",
              foreground: "#0f172a"
            },
            secondary: {
              50: "#0f172a",
              100: "#1e293b",
              200: "#334155",
              300: "#475569",
              400: "#64748b",
              500: "#94a3b8",
              600: "#cbd5e1",
              700: "#e2e8f0",
              800: "#f1f5f9",
              900: "#f8fafc",
              DEFAULT: "#94a3b8",
              foreground: "#0f172a"
            },
            success: {
              50: "#14532d",
              100: "#166534",
              200: "#15803d",
              300: "#16a34a",
              400: "#22c55e",
              500: "#4ade80",
              600: "#86efac",
              700: "#bbf7d0",
              800: "#dcfce7",
              900: "#f0fdf4",
              DEFAULT: "#4ade80",
              foreground: "#0f172a"
            }
          }
        }
      }
    })
  ]
};
