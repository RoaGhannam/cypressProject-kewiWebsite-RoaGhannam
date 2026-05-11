import actions from '../pageObject/checkoutProcess/Actions.cy'
import assertions from '../pageObject/checkoutProcess/Assertions.cy'

describe('Ckeckout process', () => {

  it('Validate thatt the user can ckeckout successfully', () => {

    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705117', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiBags()
    actions.clickOnAddToCart('COACH TOTEBAG')
    actions.clickOnAddToCart('Lady Dior')
    actions.clickOnAddToCart('LV')
    actions.clickOnShoppingIcon()
    actions.clickOnCheckoutButton()
    actions.clickOnSelectRegion()
    actions.selectSuitibleDeliveryType()
    actions.selectOnPaymentMethod()
    actions.clickOnPlaceOrderButton()
    
  })
})