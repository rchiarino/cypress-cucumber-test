import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('Im on the landing page {string}', (landingUrl) => {
  cy.visit(landingUrl);
  cy.url().should('eq', landingUrl);
});

When('I click the {string} link', (linkText) => {
  cy.contains(linkText, { matchCase: false }).click();
});

Then('I should be redirected to {string}', (url) => {
  cy.url().should('eq', url);
});

And('I fill the {string} field with {string}', (fieldName, value) => {
  cy.get(`input[name="${fieldName}"]`).type(value);
});

When('I click the {string} button', (buttonText) => {
  cy.contains(buttonText, { matchCase: false }).click();
});

Then('Im redirected to the homepage at {string}', (homepageUrl) => {
  cy.url().should('eq', homepageUrl);
});

And('I can see a {string} button', (buttonText) => {
  cy.contains(buttonText, { matchCase: false }).should('exist');
});
