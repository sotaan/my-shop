// Products

export const productFromGrid = (row = 1, column = 1) => `[data-cy=row-${row}-column-${column}]`
export const quantityInput = '[data-cy=quantity-input]'
export const addToCartButton = '[data-cy=add-to-cart-button]'

// Cart

export const cartProductRow = (row = 1) => `[data-cy=cart-product-${row}]`
export const cartProductCount = '[data-cy=cart-product-count]'
export const cartProductRemoveButton = '[data-cy=cart-product-remove-button]'

// Navbar
export const navbarCartLink = '[data-cy=navbar-cart-link]'
export const cartProductsCount = '[data-cy=cart-products-count]'
