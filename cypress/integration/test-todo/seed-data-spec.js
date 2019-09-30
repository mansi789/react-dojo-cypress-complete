
describe('seeding data', ()=>{
it('Loads todo on page load',()=>{
cy.seedData()
cy.get('.todo-list li').should('have.length',4)
    })
})