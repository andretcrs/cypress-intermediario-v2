describe('Login', () => {
  it('successfully', () => {
   const user = Cypress.env('user.name')
   const password = Cypress.env('user.password')
   const options = {cacheSession: false}

   cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
