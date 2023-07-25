const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1200,
    viewportHeight: 660,
  },
});
