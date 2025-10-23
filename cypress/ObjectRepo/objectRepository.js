export const loginSelectors = {
    loginPageText: "//div[text()='Swag Labs']",
    usernameField: "#user-name",
    passwordField: "#password",
    loginButton: "#login-button",
    errorMessage: "//h3[@data-test='error']"
};

export const productSelectors = {
    productPageText: "//span[text()='Products']",
    sortDropdown: "select.product_sort_container",
    addToCart: "#add-to-cart-sauce-labs-onesie",
    cartButton: ".shopping_cart_link"
};

export const cartSelectors = {
    cartPageText: "//span[text()='Your Cart']",

};

export const checkOutSelectors = {
    checkOutPageText: "//span[text()='Checkout: Your Information']",
    checkOutFirstName: "#first-name",
    checkOutLastName: "#last-name",
    postalCode: "#postal-code",
    checkOutContinueButton: "#continue",
    checkOutOverviewText: "//span[text()='Checkout: Overview']",
    priceTotal: ".summary_subtotal_label",
    taxTotal: ".summary_tax_label",
    summaryTotal: ".summary_total_label",
    finishButton: "#finish",
    thankYouMessage: "//h2[text()='Thank you for your order!']"

};