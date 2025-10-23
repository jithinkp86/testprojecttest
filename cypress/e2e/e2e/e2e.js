import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
const loginPage = require("../../POM/LoginPage");
const productPage = require("../../POM/ProductPage");
const cartPage = require("../../POM/CartPage");
const checkoutPage = require("../../POM/CheckoutPage");

Given('I open the SauceDemo login page', () => {
    cy.visit('/');
});

When('I login with username {string} and password {string}', (username, password) => {
    cy.login(username, password); 
});

Then('I should see the Products page title {string}', (expectedText) => {
    productPage.getProductPageText().should('have.text', expectedText);
    cy.url().should('include', '/inventory.html');
});

And('I sort products by {string}', (sortOption) => {
    productPage.selectSortOption(sortOption);
});

And('I add first {int} products to the cart', (count) => {
    for (let i = 0; i < count; i++) {
        cy.get('.inventory_item')
            .eq(i)
            .find('button.btn_primary')
            .click();
    }
});

Then('I click on cart button for checkout', () => {
    productPage.clickCartButton();
    cartPage.verifyCartPageText();
});

And('I checkout with first name {string}, last name {string} and postal code {string}', (firstName, lastName, postalCode) => {
    productPage.clickCartButton();
    cartPage.verifyCartPageText();
    cartPage.clickCheckoutButton();
    checkoutPage.verifyCheckoutPageText("Checkout: Your Information");
    checkoutPage.enterFirstName(firstName);
    checkoutPage.enterLastName(lastName);
    checkoutPage.enterPostalCode(postalCode);
    checkoutPage.clickContinue();
    checkoutPage.verifyCheckoutOverviewText("Checkout: Overview");
});

And('Verify the subTotal with totalPrice', () => {
    checkoutPage.verifySubTotalEqualsTotal();
});

Then('I should see the thank you message {string}', (message) => {
    checkoutPage.verifyThankYouMessage(message);
});