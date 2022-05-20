/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays one item list", () => {
    cy.get("li").should("have.length", 1);

    cy.get("li").first().should("have.text", "About");
  });

  it("should click about and  render about page", () => {
    cy.get("a").first().click();
    cy.url().should("include", "/about");
  });
});
