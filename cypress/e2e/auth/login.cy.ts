import { LOGIN_VALIDATION_MESSAGES } from "../../../src/utils/LOGIN_VALIDATION_MESSAGE";

describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("pokazuje błędy walidacji przy pustym submit", () => {
    cy.dataCy("submit").click();

    cy.contains(LOGIN_VALIDATION_MESSAGES.email.required).should("be.visible");
    cy.contains(LOGIN_VALIDATION_MESSAGES.password.tooShort).should(
      "be.visible",
    );
  });

  it("pokazuje błąd dla nieprawidłowego emaila", () => {
    cy.dataCy("email").type("zly-email");
    cy.dataCy("password").type("Sekret123");
    cy.dataCy("submit").click();

    cy.contains(LOGIN_VALIDATION_MESSAGES.email.invalid).should("be.visible");
  });

  it("przechodzi z poprawnymi danymi i wywołuje submit handler", () => {
    cy.intercept("POST", "/api").as("loginRequest");

    cy.dataCy("email").type(Cypress.env("VITE_MAIL"));
    cy.dataCy("password").type(Cypress.env("VITE_PASSWORD"));
    cy.dataCy("submit").click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    cy.window()
      .its("localStorage.__token__")
      .should("be.a", "string")
      .and((t) => expect(t.length).to.be.greaterThan(10));

    cy.get("body")
      .find('[data-cy="error"]', { timeout: 0 })
      .should("not.exist");
  });
});
