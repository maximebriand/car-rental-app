describe('dream-car', () => {
  beforeEach(() => cy.visit('/iframe.html?id=authcomponent--primary'));
  it('should render the component', () => {
    cy.get('dream-car-auth').should('exist');
  });
});