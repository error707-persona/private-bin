/* eslint-disable camelcase, no-magic-numbers, security/detect-non-literal-fs-filename */
import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => {
    return {
        server: { watch: { usePolling: true } },
    };
});
