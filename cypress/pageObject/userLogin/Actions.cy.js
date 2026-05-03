class LoginActions {
  visitHome() {
    cy.visit('https://kewi.ps/')
  }

  openLogin() {
    cy.get('svg.lucide-user').parent().click()
  }

  login(phone, password) {
    cy.login(phone, password)
  }
}

export default new LoginActions()