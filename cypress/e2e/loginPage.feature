Feature: SauceDemo Login

    Scenario: Verify login page title
        Given I open the SauceDemo login page
        Then I should see the login page title "Swag Labs"

    Scenario Outline: Login with valid credentials
        Given I open the SauceDemo login page
        When I login with username "<username>" and password "<password>"
        Then I should see the Products page title "<outcome>"
        Examples:
            | username                | password     | outcome  |
            | standard_user           | secret_sauce | Products |
            | performance_glitch_user | secret_sauce | Products |
            | problem_user            | secret_sauce | Products |
            | error_user              | secret_sauce | Products |
            | visual_user             | secret_sauce | Products |

    Scenario Outline: Login with invalid credentials
        Given I open the SauceDemo login page
        When I login with username "<username>" and password "<password>"
        Then I should see the error message "<outcome>"
        Examples:
            | username   | password     | outcome                                                                   |
            | user       | sauce        | Epic sadface: Username and password do not match any user in this service |
            | user34     | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | 1234567    | secret       | Epic sadface: Username and password do not match any user in this service |
            | 123@$%$STR | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | !@#$%^&    | !@#$%^&      | Epic sadface: Username and password do not match any user in this service |
            | testuser   | 123456789    | Epic sadface: Username and password do not match any user in this service |
            | usertest   | Qwerty34@    | Epic sadface: Username and password do not match any user in this service |
            | null       | null         | Epic sadface: Username and password do not match any user in this service |