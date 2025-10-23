Feature: Get User

  Scenario: Successfully get user details
    Given I have a valid user ID
    When I get the user details
    Then the user details should be correct

  Scenario: Fail to get user details with invalid ID 
    Given I have an invalid user ID
    When I get the user details
    Then the API should return a 404 error
