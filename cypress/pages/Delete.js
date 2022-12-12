
class deleteLogin {
    elements = {
        deleteAccount: () => cy.contains('[href="/delete_account"]'),

    }
}

module.exports = new deleteLogin();