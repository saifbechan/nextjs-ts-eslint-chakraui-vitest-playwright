/// <reference types="vitest" />

import { defineConfig, UserConfigExport } from 'vitest/config';
import react from '@vitejs/plugin-react';

const config: UserConfigExport = {
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    deps: { fallbackCJS: true },
  },
};

export default defineConfig(config);
