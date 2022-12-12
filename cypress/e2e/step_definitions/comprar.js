import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

const comprar = require("../../pages/Compra");

When("o usuário adiciona três itens ao carrinho", () => {
  comprar.elements.product().should('exist').click({ force: true })
  comprar.elements.product1().should('exist').click({ force: true })
  comprar.elements.product2().should('exist').click({ force: true })
})

When("o usuário clica no menu em produto", () => {
  comprar.elements.productMenu().should('exist').click({ force: true })
})

And("usuário clica no carrinho", () => {
  comprar.elements.cart().should('exist').click()
})

And("usuário clica em fazer o check-out", () => {
  comprar.elements.proceedToCheckout().should('exist').click()
})

And("clica em faça a encomenda", () => {
  comprar.elements.placeOrder().should('exist').click()
})

And("realiza o pagamento", () => {
  comprar.elements.nameOnCard().type('Miriam Motta Teste')
  comprar.elements.cardNumber().type('15226646462626464')
  comprar.elements.CVC().type('254')
  comprar.elements.expirationMonth().type('10')
  comprar.elements.expirationYear().type('2060')
  comprar.elements.payEndCorfirmOrder().should('exist').click()
})

And("o usuário clica em {string}", () => {
  comprar.elements.seeProduct().should('exist').click()
})

And("aumenta a quantidade para {string}", () => {
  //comprar.elements.quantity().clear();
  comprar.elements.quantity().clear().type('4')
})

And("clica no botão {string}", () => {
  comprar.elements.addToCart().should('exist').click({ force: true })
})

And("clica em {string}", () => {
  comprar.elements.seeCart().should('exist').click({ force: true })
})

And("clique no botão {string} e verifique se a fatura foi baixada com sucesso", () => {
  comprar.elements.downloadInvoice().should('exist')
})

Then("depois do pedido realizado, volte para a página inicial", () => {
  comprar.elements.continue().should('exist').click()
})
