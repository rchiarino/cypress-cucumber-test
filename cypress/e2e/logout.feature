Feature: Log out
    Scenario: Succesfully log out
        Given Im logged in to the homepage "http://localhost:4200/homepage"
        And Im logged in as "Estudiante"
        When I click the "Log out" button
        Then Im redirected to the landing page at "http://localhost:4200/landing"
        And I can see a "Log in" button