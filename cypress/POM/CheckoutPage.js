import { checkOutSelectors } from "../ObjectRepo/objectRepository";

class CheckoutPage {

    getCheckoutPageText() {
        return cy.xpath(checkOutSelectors.checkOutPageText, { timeout: 15000 })
            .should('be.visible');
    }

    verifyCheckoutPageText(expectedText) {
        this.getCheckoutPageText().should('have.text', expectedText);
    }

    enterFirstName(firstName) {
        cy.get(checkOutSelectors.checkOutFirstName, { timeout: 15000 })
            .clear()
            .type(firstName);
    }

    enterLastName(lastName) {
        cy.get(checkOutSelectors.checkOutLastName, { timeout: 15000 })
            .clear()
            .type(lastName);
    }

    enterPostalCode(postalCode) {
        cy.get(checkOutSelectors.postalCode, { timeout: 15000 })
            .clear()
            .type(postalCode);
    }

    clickContinue() {
        cy.get(checkOutSelectors.checkOutContinueButton, { timeout: 15000 })
            .click();
    }

    verifyCheckoutOverviewText(expectedText) {
        cy.xpath(checkOutSelectors.checkOutOverviewText, { timeout: 15000 })
            .should('have.text', expectedText);
    }

    verifySubTotalEqualsTotal() {
        cy.get(checkOutSelectors.priceTotal).invoke('text').then((itemTotalText) => {
            const itemTotal = parseFloat(itemTotalText.replace("Item total: $", ""));

            cy.get(checkOutSelectors.taxTotal).invoke('text').then((taxText) => {
                const tax = parseFloat(taxText.replace("Tax: $", ""));
                const expectedTotal = itemTotal + tax;

                cy.get(checkOutSelectors.summaryTotal).invoke('text').then((totalText) => {
                    const total = parseFloat(totalText.replace("Total: $", ""));
                    expect(total).to.eq(expectedTotal);
                });
            });
        });
    }

    verifyThankYouMessage(expectedText) {
        cy.get(checkOutSelectors.finishButton).click();
        cy.xpath("//h2[text()='Thank you for your order!']", { timeout: 15000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim().toLowerCase()).to.eq(expectedText.toLowerCase());
            });
    }

}

export default new CheckoutPage();
