class checkoutProcessAssertions {

  verifyTheProductAddedToCartSuccessfully() {
    cy.contains('1x COACH TOTEBAG (mixed) added to your cart.').should('be.visible')
  }
}

export default new checkoutProcessAssertions()