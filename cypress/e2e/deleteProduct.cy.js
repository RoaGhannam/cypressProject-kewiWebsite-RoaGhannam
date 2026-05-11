import actions from '../pageObject/deleteProduct/Actions.cy'
import assertions from '../pageObject/deleteProduct/Assertions.cy'

describe('Delete products', () => {

  it('Validate that the user can delete product successfully', () => {

    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705117', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiBags()
    actions.clickOnAddToCart('COACH TOTEBAG')
    actions.clickOnAddToCart('Lady Dior')
    actions.clickOnAddToCart('LV')
    actions.clickOnShoppingIcon()
    actions.deleteAllItems()
    assertions.verifyTheShoppingCartIsEmpty()
    
  })
})