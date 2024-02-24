import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('[data-cy="select-all"]').check() 
    cy.get('[type="checkbox"]').each(($el) => {
      cy.wrap($el).should('be.checked')
    }) 
    cy.get('[data-cy="checkbox-USA"]').uncheck()
    cy.get('[data-cy="select-all"]').should('not.be.checked')
  })
})