Feature: Register
    As a new user
    I want to register an account
    So that I can access the homepage

    Scenario: Succesful user registration
        Given Im on the landing page "http://localhost:4200/landing"
        When I click the "Don't have an account?" link
        Then I should be redirected to "http://localhost:4200/register"
        And I fill the "Name" field with "Estudiante"
        And I fill the "Password" field with "123456"
        When I click the "Register" button
        Then Im redirected to the homepage at "http://localhost:4200/homepage"
        And I can see a "Log out" button
