class AddAnyProductToCartAssertions {

  verifyTheProductAddedToCartSuccessfully() {
    cy.contains('Added to cart').should('be.visible')
  }
}

export default new AddAnyProductToCartAssertions()