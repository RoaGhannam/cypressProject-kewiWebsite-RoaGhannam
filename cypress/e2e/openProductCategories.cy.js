import actions from '../pageObject/openProductCategories/Actions.cy'
import assertions from '../pageObject/openProductCategories/Assertions.cy'

describe('Visiting category', () => {

  it('Validate that the user can visit Kéwi wallets category', () => {
    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705116', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiWallets()
    assertions.verifyCanVisitKewiWalletSuccessfully()
  })

  it('Validate that the user can visit Kéwi perfume', () => {
    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705116', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiPerfume()
    assertions.verifyCanVisitKewiPerfumeSuccessfully()
  })

  it('Validate that the user can visit Kéwi accessories', () => {
    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705116', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiAccessories()
    assertions.verifyCanVisitKewiAccessoriesSuccessfully()
  })

})