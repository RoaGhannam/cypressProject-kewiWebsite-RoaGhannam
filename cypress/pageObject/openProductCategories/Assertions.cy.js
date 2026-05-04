class openProductCategoriesAssertions {
    verifyCanVisitKewiWalletSuccessfully(){
        cy.contains('h3', 'LV Passport wallet').should('be.visible')
        cy.contains('h3', 'Fendi wallet').should('be.visible')

    }

    verifyCanVisitKewiPerfumeSuccessfully(){
        cy.contains('h3', 'MEMWA MINI 113').should('be.visible')
        cy.contains('h3', 'Memwa Mini 156 So Cute').should('be.visible')
    }

    verifyCanVisitKewiAccessoriesSuccessfully(){
        cy.contains('p', 'No products in this category').should('be.visible')
    }

  
}

export default new openProductCategoriesAssertions()