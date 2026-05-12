class visitToHomePageAssertions {

  shouldHomePageBeVisible() {
    cy.contains('h1', 'Premium Bags & Accessories').should('be.visible')
    cy.contains('Featured Products').should('be.visible')
  }

}

export default new visitToHomePageAssertions()