describe('Input form', ()=>{
    before( ()=> {
        cy.visit('/');
      })
    it('input is focased', () =>{
       
        cy.focused().should('have.class', 'new-todo')
    })
    it('accepts input', ()=> {
        const todo1 = 'Buy dogs'
        cy.get('.new-todo').type(todo1).should('have.value', todo1)
    })

    context('form test',()=>{
        it('Adds a new todo on submit',()=>{
            const itemText ='buy eggs'
            cy.server()
            cy.route('POST', '/api/todos',{
                name:itemText, 
                id:1,
                isComplete: false
            })
            cy.get('.new-todo').type(itemText).type('{enter}')
            .should('have.value', '')
            cy.get('.todo-list li')
            .should('have.length', 1)
            .and('contain', itemText)
        })
    })
})