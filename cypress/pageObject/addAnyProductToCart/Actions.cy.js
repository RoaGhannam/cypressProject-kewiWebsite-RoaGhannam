class AddAnyProductToCartActions {

  visitProductsPage() {
    cy.visit('https://kewi.ps/')
  }

  openLogin() {
    cy.get('svg.lucide-user').parent().click()
  }

  login(phone, password) {
    cy.login(phone, password)
  }

  clickOnAnyProduct() {
    cy.contains('h3', 'Chanel wallet').click()
  }

  clickAddToCart() {
    cy.contains('button', 'Add to Cart').click()
  }
}

export default new AddAnyProductToCartActions()