// https://docs.cypress.io/api/introduction/api.html

describe("vueblog", () => {
  it("Visits the homepage, adds a comment then removes the comment", () => {
    cy.visit("/");
    cy.contains("h1", "Gabe Sousa");
    cy.get('[data-test="comment-box').type("e2e testing");
    cy.get('[data-test="submit-btn').click();
    cy.get('[data-test="remove')
      .last()
      .click();
  });

  it("Visits all blog posts, checks read count", () => {
    cy.visit("/intro-to-css-grid");
    cy.contains("h1", "Introduction to CSS Grid");
    cy.contains('[data-test="read"]', 1);
    cy.get('[data-test="return')
      .first()
      .click();

    cy.visit("/single-file-components");
    cy.contains("h1", "Introduction to Single File Components");
    cy.get('[data-test="return')
      .first()
      .click();

    cy.visit("/css-animated-gradient");
    cy.contains("h1", "Fluid Animated CSS Gradient Text Effect");
    cy.get('[data-test="return')
      .first()
      .click();
  });
});
