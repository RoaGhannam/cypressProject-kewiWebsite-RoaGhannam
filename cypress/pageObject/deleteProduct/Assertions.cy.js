class deleteProductAssertions {

  verifyTheShoppingCartIsEmpty() {
    cy.contains('Your cart is empty').should('be.visible')
  }
}

export default new deleteProductAssertions()