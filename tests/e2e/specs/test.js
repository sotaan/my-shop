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
    // nothing is in cart by default
    cy.get(g.cartProductsCount)
      .should('have.text', '0')
    // get first product in first row
    cy.get(g.productFromGrid(1, 1))
      .within(() => {
        // I want 2 items
        cy.get(g.quantityInput)
          .type('{backspace}2')
        // I click to add the items
        cy.get(g.addToCartButton)
          .click()
      })
    // cart has now 1 product stored
    cy.get(g.cartProductsCount)
      .should('have.text', '1')
    // go to cart
    cy.get(g.navbarCartLink)
      .click()
    // my URL have changed
    cy.url()
      .should('contain', '/cart')

    cy.get(g.cartProductRow(1))
      .within(() => {
        cy.get(g.cartProductCount)
          .should('have.text', '2')

        cy.get(g.cartProductRemoveButton)
          .click({ force: true })
      })

    cy.get(g.cartProductsCount)
      .should('have.text', '0')
    cy.get(g.noProductsInCartNotification)
      .should('be.visible')
  })
})
