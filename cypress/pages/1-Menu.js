
class menu {
  elements = {
    home: () => cy.contains('Home'),
    products: () => cy.contains('Products'),
    cart:() => cy.contains('Cart'),
    signupLogin: () => cy.get('[href="/login"]'),
    testCases:() => cy.contains('Test Cases'),
    APITesting:() => cy.contains('API Testing'),
    videoTutorials:() => cy.contains('Video Tutorials'),
    contactUs: () => cy.contains('Contact us'),
    fillName: () => cy.get(':nth-child(2) > .form-control'),
    fillEmail: () => cy.get(':nth-child(3) > .form-control'),
    title: () => cy.get('[data-qa="subject"]'),
    fillInMessage: () => cy.get('#message'),
    submit: () => cy.get(':nth-child(7) > .btn'),
    confirmationPhrase: () => cy.get('.status'),
    
  };
}
module.exports = new menu();
