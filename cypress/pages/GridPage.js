class GridPage {

  open() {
    cy.visit('https://demoqa.com/selectable')
  }

  switchToGrid() {
    cy.contains('Grid').click()
  }

  pick(item) {
    cy.contains(item).click()
  }

  isActive(item) {
    cy.contains(item).should('have.class', 'active')
  }
  isNotActive(item) {
    cy.contains(item).should('not.have.class', 'active')
  }
}
export default new GridPage()