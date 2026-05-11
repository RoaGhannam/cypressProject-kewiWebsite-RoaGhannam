class deleteProductActions {

  visitToHomePage() {
    cy.visit('https://kewi.ps/')
  }

  openLoginPage() {
    cy.get('svg.lucide-user').parent().click()
  }

  loginUsingPhoneNumbderAndPassword(phone, password) {
    cy.login(phone, password)
  }

  clickOnProductsLink() {
    cy.contains('a', 'Products').click()
  }

  clickOnKewiBags() {
    cy.contains('span', 'Kéwi bags').click()
  }

  clickOnAnyProduct() {
    cy.contains('h3', 'COACH TOTEBAG').click()
  }

  clickOnAddToCart(productName) {
    cy.addToCart(productName)
  }

  clickOnShoppingIcon() {
    cy.get('svg.lucide-shopping-cart')
      .parent('button')
      .first()
      .click()
  }

  deleteAllItems() {
    cy.get('svg.lucide-trash2')
      .each(($el) => {
        cy.wrap($el)
          .parent('button')
          .click()
      })
  }

}

export default new deleteProductActions()