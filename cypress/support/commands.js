// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (phone, password) => {
  cy.get('input[placeholder="Enter your phone number"]').type("0567705117")
  cy.get('input[type="password"]').type("roa123")
  cy.contains('button', 'Login').click()
})

Cypress.Commands.add('addToCart', (productName) => {
  cy.get('h3')
    .filter((index, el) => {
      return el.innerText.toLowerCase().includes(productName.toLowerCase())
    })
    .first()
    .closest('.group')
    .within(() => {
      cy.get('button.btn-scale').click()
    })
})