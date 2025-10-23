Feature: Update User

    Scenario: Successfully update user details
        Given I have a valid user ID
        When I update the user details with valid data
        Then the user details should be updated successfully

    Scenario: Fail to update user details with invalid data
        Given I have a valid user ID
        When I update the user details with invalid email
        Then the API should return an error
