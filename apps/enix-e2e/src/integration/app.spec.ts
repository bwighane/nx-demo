import { getGreeting } from '../support/app.po';

describe('enix', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to enix!');
  });
});
