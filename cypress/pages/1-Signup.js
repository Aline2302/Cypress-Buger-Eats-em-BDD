
class Signup {

  elements = {

    logo: () => cy.get('[alt="Buger Eats"]'),
    message: () => cy.get('#page-home main h1'),
    register: () => cy.get('a[href="/deliver"]'),
    name: () => cy.get('[name="name"]'),
    CPF: () => cy.get('[name="cpf"]'),
    email: () => cy.get('[name="email"]'),
    whatsapp: () => cy.get('[name="whatsapp"]'),
    postalCode: () => cy.get('[name="postalcode"]'),
    postalCodeButton: () => cy.get('[type="button"]'),
    number: () => cy.get(':nth-child(4) > :nth-child(1) > input'),
    complement: () => cy.get(':nth-child(4) > :nth-child(2) > input'),
    motorbike: () => cy.get('[alt="Moto"]'),
    bicycle: () => cy.get('[alt="Bicicleta"]'),
    car: () => cy.get('[alt="Van/Carro"]'),
    cnh: () => cy.get('input[accept="image/*"]'),
    finalizeRegistration: () => cy.get('.button-success'),
    successMessage: () =>cy.get('.swal2-popup')
  }
}
module.exports = new Signup();
