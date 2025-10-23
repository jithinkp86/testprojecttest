import { loginSelectors, productSelectors } from "../ObjectRepo/objectRepository";

class ProductPage {
    getProductPageText() {
        return cy.xpath(productSelectors.productPageText);
    }

    getSortDropdown() {
        return cy.get('select.product_sort_container');
    }

    selectSortOption(optionText) {
        this.getSortDropdown().select(optionText);
    }

    addFirstNProductsToCart(n) {
        cy.get('.inventory_item', { timeout: 15000 }).each(($el, index) => {
            if (index < n) {
                cy.wrap($el).find('button.btn_primary').click();
            }
        });
    }

    clickCartButton() {
        cy.get(productSelectors.cartButton, { timeout: 15000 })
            .should('be.visible')
            .click();
    }

    verifyProductText() {
        this.getProductPageText().should('have.text', 'Products');
        cy.url().should('include', '/inventory.html');
    }
}

export default new ProductPage();
