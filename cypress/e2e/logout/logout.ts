import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('Im logged in to the homepage {string}', (homepageUrl) => {
    cy.visit('http://localhost:4200/my-site');  
});

And( 'Im logged in as {string}', (username) => {
    cy.get("[id=username]").should("have.text", "Estudiante");
})

When('I click the {string} button', (buttonText) => {
    cy.contains(buttonText, { matchCase: false }).click()
});


Then('Im redirected to the landing page at {string}', (landingUrl) => {
    cy.visit(landingUrl);
    cy.url().should('eq', landingUrl);
});


And('I can see a {string} button', (buttonText) => {
    cy.contains(buttonText, { matchCase: false }).should('have.length', 1)
});