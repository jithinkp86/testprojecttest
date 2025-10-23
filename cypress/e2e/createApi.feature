Feature: Create User

  Scenario: Successfully create a new user
    Given I have the GoRest API endpoint
    When I create a new user with valid data
    Then the user should be created successfully

  Scenario: Fail to create a new user with invalid data
    Given I have the GoRest API endpoint
    When I create a new user with invalid email
    Then the API should return an error