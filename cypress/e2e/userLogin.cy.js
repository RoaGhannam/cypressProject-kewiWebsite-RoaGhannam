
import loginActions from '../pageObject/userLogin/Actions.cy'
import loginAssertions from '../pageObject/userLogin/Assertions.cy'

describe('Login Test with valid and invalid credentials', () => {

  it('login with valid user', () => {
    loginActions.visitToHomePage()
    loginActions.openLogin()
    loginActions.login('0567705117', 'roa123')

    loginAssertions.shouldLoginSuccessfully()
  })

  it('login with invalid user', () => {
    loginActions.visitToHomePage()
    loginActions.openLogin()
    loginActions.login('0567705117', 'wrongpassword')

    loginAssertions.shouldShowError()
  })

})