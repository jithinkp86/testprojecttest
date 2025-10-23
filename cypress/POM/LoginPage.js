import { loginSelectors } from '../ObjectRepo/objectRepository';

class LoginPage {
    visit() {
        cy.visit('/'); // baseurl is taken from config.js file
        cy.get(loginSelectors.usernameField, { timeout: 20000 })
            .should('exist')
            .and('be.visible');
    }

    getLoginPageText() {
        return cy.xpath(loginSelectors.loginPageText);
    }

    enterUsername(username) {
        cy.get(loginSelectors.usernameField).clear().type(username);
    }

    enterPassword(password) {
        cy.get(loginSelectors.passwordField).clear().type(password);
    }

    clickLogin() {
        cy.get(loginSelectors.loginButton).click();
    }

    verifyErrorMessage(expectedError) {
        cy.xpath(loginSelectors.errorMessage)
            .should('be.visible')
            .and('have.text', expectedError);
    }
}
module.exports = new LoginPage();