import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


const signup = require("../../pages/1-Signup")


    
Given("acessar o site", () => {
  cy.visit('https://buger-eats.vercel.app')
})

When("clica em Cadastre-se para fazer entregas", () => {
  signup.elements.register().should('exist').click()
})

And("a mensagem {string}", () => {
  signup.elements.message().should('exist').click()
})

And("completar o cadastro", () => {
  signup.elements.name().type(`Miriam${Cypress._.random(0, 1e3)}`)
  signup.elements.CPF().type('72075947040')
  signup.elements.email().type(`aline${Cypress._.random(0, 1e6)}@qa.team`)
  signup.elements.whatsapp().type(`686254${Cypress._.random(124, 1e5)}`)
  signup.elements.postalCode().type('74270-150')
  signup.elements.postalCodeButton().should('exist').click()
  signup.elements.number().type(`${Cypress._.random(0, 1e4)}`)
  signup.elements.complement().type('perto do mercado Real')
  signup.elements.motorbike().should('exist').click()
  signup.elements.cnh().attachFile('cnh-digital.jpg',{ force: true })
  signup.elements.finalizeRegistration().should('exist').click()
  
})

Then("verá a logo", () => {
  signup.elements.logo().should('exist').click()
})

