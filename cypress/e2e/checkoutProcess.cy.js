import actions from '../pageObject/checkoutProcess/Actions.cy'
import assertions from '../pageObject/checkoutProcess/Assertions.cy'

describe('Ckeckout process', () => {

  it('Validate thatt the user can ckeckout successfully', () => {

    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705116', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiBags()
    actions.clickOnAddToCart('COACH TOTEBAG')
    actions.clickOnAddToCart('Lady Dior')
    actions.clickOnAddToCart('LV')
    cy.get('svg.lucide-shopping-cart').parent('button').first().click()
    cy.contains('button' , 'Checkout').click()
    cy.get('#region').select('West Bank')
    cy.get('#deliveryType').select('Express')
    cy.get('input[name="paymentMethod"][value="visa"]').check()
    cy.contains('button', 'Place Order').click()


    
    
  })
})