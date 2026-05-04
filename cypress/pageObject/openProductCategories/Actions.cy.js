class openProductCategoriesActions {

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

  clickOnKewiWallets() {
    cy.contains('span', 'Kéwi wallets').click()
  }

  clickOnKewiPerfume() {
    cy.contains('span', 'Kéwi perfume').click()
  }

  clickOnKewiAccessories() {
    cy.contains('span', 'Kéwi accessories').click()
  }


}

export default new openProductCategoriesActions()