class newUserSignup {
    elements = {
        emailAddress: () => cy.get('.signup-form > form > [type="email"]', { timeout: 20000 }),
        nameInput: () => cy.get('[type="text"]', { timeout: 20000 }),
        clickSignup: () => cy.get('.signup-form > form > .btn', { timeout: 20000 }),
        genre: () => cy.get('[id="id_gender2"]'),
        password: () => cy.get('[id="password"]'),
        day: () => cy.get('#days'),
        month: () => cy.get('#months'),
        year: () => cy.get('#years'),
        firstName: () => cy.get('#first_name'),
        lastName: () => cy.get('#last_name'),
        company: () => cy.get('#company'),
        address: () => cy.get('#address1'),
        country: () => cy.get('#country'),
        state: () => cy.get('#state'),
        city: () => cy.get('#city'),
        zipcode: () => cy.get('#zipcode'),
        mobileNumber: () => cy.get('#mobile_number'),
        createAccount: () => cy.get('.login-form > form > .btn'),
        accountCreated: () => cy.get('b'),
        continue: () => cy.get('.pull-right > .btn')
    }
    typeSignup() {
        this.elements.clickSignup().click({ force: true });
    }
}
module.exports = new newUserSignup();