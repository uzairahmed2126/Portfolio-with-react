import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [react(),tailwindcss(),    
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  resolve : {
    alias: {
    "@assets" : path.resolve(__dirname,"src/assets")
    }
  }


})
