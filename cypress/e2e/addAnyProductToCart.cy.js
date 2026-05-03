import actions from '../pageObject/addAnyProductToCart/Actions.cy'
import assertions from '../pageObject/addAnyProductToCart/Assertions.cy'

describe('Add Any Product To Cart', () => {

  it('should add product to cart successfully', () => {

    actions.visitProductsPage()
    actions.openLogin()
    actions.login('0567705116', 'roa123')
    cy.contains('a', 'Products').click()
    cy.contains('span', 'Kéwi bags').click()
    cy.contains('h3', 'COACH TOTEBAG').click()
    cy.contains('button', 'Add to Cart').click()
    cy.contains('1x COACH TOTEBAG (mixed) added to your cart.')
  .should('be.visible')
    //actions.clickOnAnyProduct()
    //assertions.verifyProductPageOpened()

    //assertions.verifyAddToCartButtonVisible()
   // actions.clickAddToCart()

    //assertions.verifyCartUpdated()
  })
})