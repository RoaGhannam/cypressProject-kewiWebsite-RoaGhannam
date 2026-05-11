import testData from '../fixtures/signupData.json'

describe('Sign Up Data Driven using fixture', () => {

  beforeEach(() => {
    cy.visit('https://kewi.ps/')
  })

  testData.forEach((data) => {

    it(`Sign Up - ${data.description}`, () => {

      cy.get('button').find('svg.lucide-user').parent('button').click()
      cy.contains('a', 'Sign Up').click()

      cy.get('[placeholder="Enter your username"]').type('Roa')
      cy.get('[placeholder="Enter your phone number"]').type(data.phone)
      cy.get('[placeholder="Enter your password"]').type('kk')

      cy.contains('button', 'Sign Up').click()

      if (data.isValid) {
        cy.contains('shorter than the minimum allowed length').should('not.exist')
      } else {
        cy.contains('shorter than the minimum allowed length').should('be.visible')
      }

    })

  })

})