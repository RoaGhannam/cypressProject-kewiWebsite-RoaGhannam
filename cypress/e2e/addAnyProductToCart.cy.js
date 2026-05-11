import actions from '../pageObject/addAnyProductToCart/Actions.cy'
import assertions from '../pageObject/addAnyProductToCart/Assertions.cy'

describe('Add Any Product To Cart', () => {

  it('should add product to cart successfully', () => {

    actions.visitToHomePage()
    actions.openLoginPage()
    actions.loginUsingPhoneNumbderAndPassword('0567705117', 'roa123')
    actions.clickOnProductsLink()
    actions.clickOnKewiBags()
    actions.clickOnAnyProduct()
    actions.clickOnAddToCart()
    assertions.verifyTheProductAddedToCartSuccessfully() 
    
  })
})