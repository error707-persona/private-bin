import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: { '@': resolve(__dirname, 'src') },
            mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
        },
        server: { watch: { usePolling: true } },
    };
});
