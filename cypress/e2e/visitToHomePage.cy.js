import actions from '../pageObject/visitToHomePage/Actions.cy'
import assertions from '../pageObject/visitToHomePage/Assertions.cy'

describe('Visiting to home page', () => {

  it('Validate that the user can visit to home page', () => {

    actions.visitToHomePage()
    assertions.shouldHomePageBeVisible()

  })

})