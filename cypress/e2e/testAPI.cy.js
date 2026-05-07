/// <reference.types="cypress" />

describe('API Testing using cy.intercept', () => {

  it('Inspect GET products API', () => {

    cy.intercept('GET', '**/products').as('getProducts')
    cy.visit('https://kewi.ps/products')
    cy.wait('@getProducts').then((interception) => {
    cy.log('Status Code: ' + interception.response.statusCode)
    cy.log('Response Body: ', interception.response.body)
    expect(interception.response.statusCode).to.eq(200)

    })

  })

})