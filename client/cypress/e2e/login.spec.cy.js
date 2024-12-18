import loginClass from '../pages/loginPage.js'

const login = new loginClass()

describe('template spec', () => {
  it('Login success', () => {
    login.makeLoginSuccess('test@test.com', 'test123')
  })

  it('Login with wrong email', () => {
    login.makeLoginWrongEmail('test.com', 'test123')
  })  

  it('Login with wrong password', () => {
    login.makeLoginWrongPassword('test@test.com', 'test')
  })  

  it('Login with empty email', () => {
    login.makeLoginEmptyEmail('test123')
  })  

  it('Login with empty password', () => {
    login.makeLoginEmptyPassword('test@test.com')
  })  

  it('Login with all textbox empty', () => {
    login.makeLoginAllEmpty()
  })  
})