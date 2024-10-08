import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import react from "@astrojs/react";
import relativeLinks from "astro-relative-links";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': resolve(__dirname, './src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/styles/variables.scss";`
                }
            }
        },
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name].js',
                    chunkFileNames: 'assets/[name].js',
                    assetFileNames: 'assets/[name].[ext]',
                },
            },
        },
    },
    integrations: [react(), relativeLinks()],
    compressHTML: false
});