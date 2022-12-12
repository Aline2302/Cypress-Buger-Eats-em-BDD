import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const newUserSignup = require("../../pages/2-NewUserSignup");
import faker from "faker-br";


And("insira um email válido", () => {
    const email = `miriam${Cypress._.random(0, 1e6)}@qa.team`
    newUserSignup.elements.emailAddress().type(email, { delay: 0 })
    cy.writeFile("cypress/fixtures/usuarioEmail.json",
        `{"email":"${email}"}`
        )
})

And("insira o {string}", () => {
    const name = `Miriam${Cypress._.random(0, 1e3)}`
    newUserSignup.elements.nameInput().type(name, { delay: 0 })
    cy.writeFile("cypress/fixtures/usuarioName.json",
    `{"name":"${name}"}`
    )

})

And("clica em Signup", (clickSignup) => {
    newUserSignup.typeSignup(clickSignup)
});

And("completa o formulário", () => {
    newUserSignup.elements.genre().should('exist').click()
    newUserSignup.elements.password().type('abc123456')
    newUserSignup.elements.day().select('23')
    newUserSignup.elements.month().select('April')
    newUserSignup.elements.year().select('1988')
    newUserSignup.elements.firstName().type('Janete')
    newUserSignup.elements.lastName().type('Pinheiros motta teste')
    newUserSignup.elements.company().type('Tecidos S.A.')
    newUserSignup.elements.address().type('4543 rua das margaridas')
    newUserSignup.elements.country().select('Canada')
    newUserSignup.elements.state().type('Alberta')
    newUserSignup.elements.city().type('Quebec City')
    newUserSignup.elements.zipcode().type('T4A')
    newUserSignup.elements.mobileNumber().type('+1 123-4567-8910')
    newUserSignup.elements.createAccount().click()
})

Then("verificar se a conta foi criada com sucesso", () => {
    newUserSignup.elements.accountCreated().should('exist')
})