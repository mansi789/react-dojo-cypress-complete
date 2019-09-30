Cypress.Commands.add("seedData", () => { 
cy.server()
cy.route('GET', '/api/todos', 'fixture:todo')
cy.visit('/')
})