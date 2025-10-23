const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    defaultCommandTimeout: 15000,
    specPattern: '**/*.{feature,features}',
    screenshotOnRunFailure: true,
    supportFolder: false,
    env: {
      apiUrl: 'https://gorest.co.in'
    }
  },
});
