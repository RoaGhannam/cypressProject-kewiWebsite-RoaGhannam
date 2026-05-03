class LoginAssertions {
  shouldLoginSuccessfully() {
    cy.contains('Logged in successfully').should('be.visible')
  }

  shouldShowError() {
    cy.contains('Invalid phone or password').should('be.visible')
  }
}

export default new LoginAssertions()