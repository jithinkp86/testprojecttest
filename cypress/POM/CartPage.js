import { cartSelectors } from "../ObjectRepo/objectRepository";

class CartPage {
    getCartPageText() {
        return cy.xpath(cartSelectors.cartPageText, { timeout: 15000 })
            .should('be.visible');
    }

    verifyCartPageText() {
        this.getCartPageText().should('have.text', 'Your Cart');
        cy.url().should('include', '/cart.html');
    }

    clickCheckoutButton() {
        cy.get('[data-test="checkout"]', { timeout: 15000 })
            .should('be.visible')
            .click();
    }
}

export default new CartPage();
