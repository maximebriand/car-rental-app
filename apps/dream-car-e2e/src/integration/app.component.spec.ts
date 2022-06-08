describe('dream-car', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('dream-car-root').should('exist');
  });
});