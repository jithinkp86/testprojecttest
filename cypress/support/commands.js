
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit('/');
    cy.get('#user-name', { timeout: 15000 }).should('be.visible').clear().type(username);
    cy.get('#password', { timeout: 15000 }).should('be.visible').clear().type(password);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.log(`Logged in as ${username}`);
});

Cypress.Commands.add('resetAppState', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log('App state reset');
});
