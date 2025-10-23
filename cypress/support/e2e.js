require('cypress-xpath');
import './commands';
import { Before, After } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
    cy.resetAppState();
});

Before(() => {
    cy.resetAppState();
    cy.log('Before hook: Starting scenario');
});

After(() => {
    cy.log('After hook: Scenario finished');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
