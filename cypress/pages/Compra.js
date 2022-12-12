class comprar {
    elements = {
        product: () => cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn', { timeout: 2000 }),
        product1: () => cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn', { timeout: 2000 }),
        product2: () => cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn', { timeout: 2000 }),
        cart: () => cy.get('u'),
        proceedToCheckout: () => cy.get('.col-sm-6 > .btn'),
        placeOrder: () => cy.get(':nth-child(7) > .btn'),
        nameOnCard: () => cy.get(':nth-child(2) > .col-sm-12 > .form-control'),
        cardNumber: () => cy.get(':nth-child(3) > .col-sm-12 > .form-control'),
        CVC: () => cy.get('.cvc > .form-control'),
        expirationMonth: () => cy.get('[name="expiry_month"]'),
        expirationYear: () => cy.get('[name="expiry_year"]'),
        payEndCorfirmOrder: () => cy.get('#submit'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),
        productMenu: () => cy.get('[href="/products"]'),
        seeProduct: () => cy.get('[href="/product_details/1"]'),
        quantity:() => cy.get('[id="quantity"]'),
        addToCart:() => cy.get('[class="btn btn-default cart"]'),
        seeCart:() => cy.get('u'),
        downloadInvoice:()=> cy.get('.col-sm-9 > .btn-default'),
        continue: () => cy.get('.pull-right > .btn')
    }
}

module.exports = new comprar();