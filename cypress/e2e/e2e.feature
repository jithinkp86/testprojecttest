Feature: E2E process
  Scenario Outline: Login with valid credentials
    Given I open the SauceDemo login page
    When I login with username "<username>" and password "<password>"
    Then I should see the Products page title "<outcome>"
    And I sort products by "Price (low to high)"
    And I add first 2 products to the cart
    Then I click on cart button for checkout
    And I checkout with first name "Test User", last name "Test" and postal code "12345"
    And Verify the subTotal with totalPrice
    Then I should see the thank you message "Thank you for your order!"

    Examples:
      | username                | password     | outcome  |
      | standard_user           | secret_sauce | Products |
      | performance_glitch_user | secret_sauce | Products |