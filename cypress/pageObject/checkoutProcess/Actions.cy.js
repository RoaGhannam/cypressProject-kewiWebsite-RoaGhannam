class checkoutProcessActions {

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
    cy.get('svg.lucide-shopping-cart').parent('button').first().click()

  }

  clickOnCheckoutButton() {
    cy.contains('button' , 'Checkout').click()
  }

  clickOnSelectRegion() {
    cy.get('#region').select('West Bank')
  }


  selectSuitibleDeliveryType() {
    cy.get('#deliveryType').select('Express')
  }

  selectOnPaymentMethod() {
    cy.get('input[name="paymentMethod"][value="visa"]').check()
  }

  clickOnPlaceOrderButton() {
    cy.contains('button', 'Place Order').click()
  }




}

export default new checkoutProcessActions()