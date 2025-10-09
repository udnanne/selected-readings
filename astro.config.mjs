import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import react from "@astrojs/react";
import relativeLinks from "astro-relative-links";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 自定義插件：複製靜態 HTML 檔案
function copyStaticPages() {
    return {
        name: 'copy-static-pages',
        writeBundle() {
            const staticPagesDir = resolve(__dirname, 'static-pages');
            const distDir = resolve(__dirname, 'dist');

            // 確保 dist 目錄存在
            if (!existsSync(distDir)) {
                mkdirSync(distDir, { recursive: true });
            }

            // 複製 judges/index.html
            const judgesSourceDir = resolve(staticPagesDir, 'judges');
            const judgesTargetDir = resolve(distDir, 'judges');
            const judgesSource = resolve(judgesSourceDir, 'index.html');
            const judgesTarget = resolve(judgesTargetDir, 'index.html');

            if (existsSync(judgesSource)) {
                if (!existsSync(judgesTargetDir)) {
                    mkdirSync(judgesTargetDir, { recursive: true });
                }
                copyFileSync(judgesSource, judgesTarget);
                console.log('✓ 複製 judges/index.html 到 dist/judges/');
            }

            // 複製 criteria/index.html
            const criteriaSourceDir = resolve(staticPagesDir, 'criteria');
            const criteriaTargetDir = resolve(distDir, 'criteria');
            const criteriaSource = resolve(criteriaSourceDir, 'index.html');
            const criteriaTarget = resolve(criteriaTargetDir, 'index.html');

            if (existsSync(criteriaSource)) {
                if (!existsSync(criteriaTargetDir)) {
                    mkdirSync(criteriaTargetDir, { recursive: true });
                }
                copyFileSync(criteriaSource, criteriaTarget);
                console.log('✓ 複製 criteria/index.html 到 dist/criteria/');
            }
        }
    };
}

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
        plugins: [copyStaticPages()],
    },
    integrations: [react(), relativeLinks()],
    compressHTML: false
});
