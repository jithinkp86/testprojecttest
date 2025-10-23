console.log("Login step definitions loaded");

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require("../../POM/LoginPage");
const productPage = require("../../POM/ProductPage");

//const loginPage = new LoginPage();

Given('I open the SauceDemo login page', () => {
    cy.visit('/');
});

Then('I should see the login page title {string}', (expectedText) => {
    loginPage.getLoginPageText().should("have.text", expectedText);

});

When("I login with username {string} and password {string}", (username, password) => {
    cy.wait(8000);
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
});

Then('I should see the error message {string}', (expectedError) => {
    loginPage.verifyErrorMessage(expectedError);
});

Then('I should see the Products page title {string}', (expectedText) => {
    productPage.getProductPageText().should('have.text', expectedText);
    cy.url().should('include', '/inventory.html');
});
console.log("Login step definitions loaded");


