class AddAnyProductToCartAssertions {

  verifyAddToCartButtonVisible() {
    cy.contains('button', 'Add to Cart').should('be.visible')
  }

  verifyProductPageOpened() {
    cy.url().should('include', '/product/')
  }

  verifyCartUpdated() {
    cy.get('.cart-count').should('not.have.text', '0')
  }
}

export default new AddAnyProductToCartAssertions()