class visitToHomePageAssertions {

  shouldHomePageBeVisible() {
    cy.contains('h1', 'Premium Bags & Accessories')
      .should('be.visible')
  }

}

export default new visitToHomePageAssertions()