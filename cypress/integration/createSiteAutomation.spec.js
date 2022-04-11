const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Test for creating website by template method', () => {
  it('validates user login, selects to create a new website by a template method and publishes it', () => {
    cy.visit('/')

    cy.assertCookieProperties()
    cy.get('button[data-qa="cookiesbanner-button-acceptall"]')
      .should('be.visible')
      .first()
      .click({ force: true })
    cy.get('button[data-qa="header-btn-hamburger"]')
      .click({ force: true })
    cy.get('a[data-qa="header-link-signin"]')
      .click({ force: true })

    cy.assertLoginPage()
    cy.get('input[data-qa="signin-inputfield-emailaddress"]')
      .type(email)
    cy.get('input[data-qa="signin-inputfield-password"]')
      .type(password)
    cy.get('button[data-qa="signin-btn-signin"]')
      .click({ force: true })

    cy.assertDashboardPage()
    cy.get('a[data-qa="sites-header-btn-createnewwebsite"]')
      .click({ force: true })

    cy.assertCreateWebTypesPage()
    cy.get('button[data-qa="wizard-btn-choosetemplate"]')
      .click({ force: true })

    cy.assertTemplatePage()
    cy.get('button[data-qa="templates-template-btn-startbuilding-rikis"]').trigger('mouseover')
    cy.get('button[data-qa="templates-template-btn-startbuilding-rikis"]')
      .click({ force: true })

    cy.assertWebsitePage()
    cy.get('button[data-qa="builder-header-btn-publishsite"]')
      .click({ force: true })
    cy.get('button[data-qa="builder-modal-beforepublish-btn"]')
      .click({ force: true })
  })
})
