import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

const menu = require("../../pages/1-Menu");
import faker from "faker-br";


Given("que estou na página inicial do site", () => {
  cy.visit("/");
});

When("usuário clica em Home", () => {
  menu.elements.home().should('exist').click()
})

When("usuário clica em Products", () => {
  menu.elements.products().should('exist').click()
})

When("usuário clica em Cart", () => {
  menu.elements.cart().should('exist').click()
})

When("o usuário clica em SignupLogin", () => {
  menu.elements.signupLogin().should('exist').click()
})

When("o usuário clica em Test Cases", () => {
  menu.elements.testCases().should('exist').click()
})

When("o usuário clica em API Testing", () => {
  menu.elements.APITesting().should('exist').click()
})

When("o usuário clica em Video Tutorials", () => {
  menu.elements.videoTutorials().should('exist').click()
})

When("usuário clica em Contact us", () => {
  menu.elements.contactUs().should('exist').click({ force: true })
})

And("preencher nome", () => {
  menu.elements.fillName().type('Miriam Leste Teste')

})
And("preencher email", () => {
  menu.elements.fillEmail().type('miriam91584@qa.team')
})

And("título da mensagem", () => {
  menu.elements.title().type('O Produto que desejo não está mais disponível ')
})

And("escreve uma mensagem", () => {
  menu.elements.fillInMessage().type('Gostaria de saber se um produto que eu desejo muito pode aparecer de novo no site futuramente')
})

And("confirmação de mensagem enviada", () => {
  menu.elements.confirmationPhrase().should('exist')
})
Then("envia a mensagem", () => {
  menu.elements.submit().should('exist').click()
})