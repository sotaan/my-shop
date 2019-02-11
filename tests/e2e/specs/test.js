// https://docs.cypress.io/api/introduction/api.html
import * as g from '../support/getters'

describe('My First Test', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '/albums', 'fixture:albums.json').as('getAlbums')
    cy.route('GET', '/photos', 'fixture:photos.json').as('getPhotos')
  })

  it('I should add two item of first product of the first row and see my cart item with the correct quantity', () => {
    cy.visit('/')
    cy.wait(['@getAlbums', '@getPhotos'])

    cy.get(g.cartProductsCount)
      .should('have.text', '0')

    cy.get(g.productFromGrid(1, 1))
      .within(() => {
        cy.get(g.quantityInput)
          .type('{backspace}2')

        cy.get(g.addToCartButton)
          .click()
      })

    cy.get(g.cartProductsCount)
      .should('have.text', '1')

    cy.get(g.navbarCartLink)
      .click()

    cy.url()
      .should('contain', '/cart')
  })
})
