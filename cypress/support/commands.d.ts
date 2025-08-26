/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
