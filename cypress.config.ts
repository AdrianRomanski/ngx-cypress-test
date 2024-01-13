import { defineConfig } from "cypress";

export default defineConfig({
    viewportHeight: 1000,
    viewportWidth: 1920,
    video: false,
    e2e: {
      baseUrl: 'http://localhost:4200',
      excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
});
