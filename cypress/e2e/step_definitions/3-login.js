import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const login = require("../../pages/3-Login");
import faker from "faker-br";

And("insira o email para logar", () => {
    login.elements.emailLogin().type('miriam91584@qa.team')
})

And("insira a senha", () => {
    login.elements.passwordLogin().type('abc123456')
})

And("usuário clica em logout", (logout) => {
    login.elements.logout().should('exist', logout).click()
})

And("usuário inseri um email inválido", () => {
    login.elements.emailLogin().type('julia2383@gmail.com')
})

And("mensagem de erro {string}", () => {
    login.elements.errorMessage().should('exist')
})

And("usuário inseri uma senha inválida", () => {
    login.elements.passwordLogin().type('2354223@3')
})

Then("clica em login", (loginButton) => {
    login.elements.loginButton().should('exist', loginButton).click()
})

