const selectorsList = {
    loginButton: "li > .undefined",
    emailField: '[data-cy="email"]', 
    passwordField: '[data-cy="password"]',
    signInButton: '.bg-blue-700',
  
  }

class loginClass {
  makeLoginSuccess(email, senha){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.emailField).type(email)
    cy.get(selectorsList.passwordField).type(senha)
    cy.get(selectorsList.signInButton).click()
    cy.get(selectorsList.loginButton).contains('Logout')
  }

  makeLoginWrongEmail(email, senha){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.emailField).type(email)
    cy.get(selectorsList.passwordField).type(senha)
    cy.get(selectorsList.signInButton).click()
    cy.get('body').contains('Email is not valid')
  }

  makeLoginWrongPassword(email,senha){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.emailField).type(email)
    cy.get(selectorsList.passwordField).type(senha)
    cy.get(selectorsList.signInButton).click()
    cy.get('body').contains('Invalid email or password')
  }

  makeLoginEmptyEmail(senha){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.passwordField).type(senha)
    cy.get(selectorsList.signInButton).click()
    cy.get('body').contains('Email is required')
  }

  makeLoginEmptyPassword(email){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.emailField).type(email)
    cy.get(selectorsList.signInButton).click()
    cy.get('body').contains('Password is required')
  }

  makeLoginAllEmpty(){
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.signInButton).click()
    cy.get('body').contains('Email is required')
    cy.get('body').contains('Password is required')
  }

}

export default loginClass