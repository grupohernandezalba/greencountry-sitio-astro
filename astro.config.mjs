// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import path from "path"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});