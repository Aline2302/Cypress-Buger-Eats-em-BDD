
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
    cnh: () => cy.get('p > svg'),
    finalizeRegistration: () => cy.get('.button-success'),
    successMessage: () =>cy.get('.swal2-popup')
  }
}
module.exports = new Signup();

// class entregador {
//   components = {
//       nameImput: `Aline${Cypress._.random(0, 1e3)}`,
//       cpfImput: '00000014141',
//       emailImput: `aline${Cypress._.random(0, 1e6)}@qa.team`,
//       whatssapImput: '11999999999',
//       addressImput: {
//         postalcodeImput: '04534011',
//         streetImput: 'Rua Joaquim Floriano',
//         numberImput: '1000',
//         defailsImput: 'Ap 142',
//         districtImput: 'São Paulo/SP',
//       },
//       metodo_entrega: 'moto',
//       cnhImput: 'cnh-digital.jpg'
//     }
//   }
//     module.exports = new signup();











// export default {
//   register: function () {
//     var entregador = {
//       nameImput: `Aline${Cypress._.random(0, 1e3)}`,
//       cpfImput: '00000014141',
//       emailImput: `aline${Cypress._.random(0, 1e6)}@qa.team`,
//       whatssapImput: '11999999999',
//       addressImput: {
//         postalcodeImput: '04534011',
//         streetImput: 'Rua Joaquim Floriano',
//         numberImput: '1000',
//         defailsImput: 'Ap 142',
//         districtImput: 'São Paulo/SP',
//       },
//       metodo_entrega: 'moto',
//       cnhImput: 'cnh-digital.jpg'
//     }

//     return entregador


//   }
// }