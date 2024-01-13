describe('First test suite', () => {
  it('first test', () => {

    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // by tag name
    cy.get('input');

    // by id
    cy.get('input');

    // by class value
    cy.get('.input-full-width');

    // by Attribute name
    cy.get('[fullwidth]');

    // by Attribute and value
    cy.get('[placeholder="Email"]');

    // by entire Class value
    // cy.get('[class="input-full-width size-medium shape-rectangle]');

    // by two attributes
    // cy.get('[placeholder="Email"][fullwidth]');

    // by  cypress test id
    // cy.get('[data-cy="inputEmail"]');

  });
});


