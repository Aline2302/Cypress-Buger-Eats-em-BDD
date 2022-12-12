import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const deleteLogin = require("../../pages/Delete");
import faker from "faker-br";

And("usuário deleta a conta", (deleteAccount) => {
    deleteLogin.elements.deleteAccount().should('exist', deleteAccount).click()
})

Then("usuário loga com o perfil cadastrado", () => {
    deleteLogin.elements.signupLogin().should('exist').click()
    deleteLogin.elements.emailLogin().
    deleteLogin.elements.passwordLogin()
  })