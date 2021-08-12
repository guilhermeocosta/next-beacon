/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command example for reference
     * @example cy.example_cmd()
     */
    example_cmd(): Chainable<Window>;
  }
}
