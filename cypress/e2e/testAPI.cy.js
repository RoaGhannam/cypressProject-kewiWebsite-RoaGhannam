///<reference types="cypress"/>

it('mock empty products list', () => {
    cy.intercept('GET', '**/user/api/products', { fixture: 'emptyProducts.json' }).as('getProducts')
    cy.intercept('GET', '**/admin/api/categories*', { fixture: 'categories.json' }).as('getCategories')

    cy.visit('https://kewi.ps/')
    cy.wait('@getProducts')

    cy.contains('Products').click()

    cy.get('.product-card-hover').should('not.exist')
})

it('mock delete categories', () => {

    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
    cy.visit('https://kewi.ps/')
    cy.contains('Products').click()
    
})
it('mock item soldout', () => {
    cy.intercept('GET', '**/user/api/products', { fixture: 'soldoutProduct.json' }).as('getProducts')
    cy.intercept('GET', '**/admin/api/categories*', { fixture: 'categories.json' }).as('getCategories')


    cy.visit('https://kewi.ps/')
    cy.contains('Products').click()

    cy.wait('@getProducts')
    cy.contains('sold out').should('be.visible')
})

