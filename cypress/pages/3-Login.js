class login {
    elements = {
        emailLogin: () => cy.get('[data-qa="login-email"]'),
        passwordLogin: () => cy.get('[data-qa="login-password"]'),
        loginButton: () => cy.get('.login-form > form > .btn', { timeout: 2000 }),
        logout: () => cy.get('[href="/logout"]', { timeout: 2000 }),
        errorMessage: () => cy.get('.login-form > form > p'),
    }
    typeSignup() {
        this.elements.clickSignup().click({ force: true });
    }
}

module.exports = new login();