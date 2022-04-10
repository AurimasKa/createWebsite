const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Test for creating website by template method', () => {
  it('validates user login, selects to create a new website by a template method and publishes it', () => {
    cy.visit('/')

    assertCookieProperties()
    cy.get('button[data-qa="cookiesbanner-button-acceptall"]')
      .should('be.visible')
      .first()
      .click({ force: true })
    cy.get('button[data-qa="header-btn-hamburger"]')
      .click({ force: true })
    cy.get('a[data-qa="header-link-signin"]')
      .click({ force: true })

    assertLoginPage()
    cy.get('input[data-qa="signin-inputfield-emailaddress"]')
      .type(email)
    cy.get('input[data-qa="signin-inputfield-password"]')
      .type(password)
    cy.get('button[data-qa="signin-btn-signin"]')
      .click()

    assertDashboardPage()
    cy.get('a[data-qa="sites-header-btn-createnewwebsite"]')
      .click()

    assertCreateWebTypesPage()
    cy.get('button[data-qa="wizard-btn-choosetemplate"]')
      .click({ force: true })

    assertTemplatePage()
    cy.get('button[data-qa="templates-template-btn-startbuilding-adelina"]').trigger('mouseover')
    cy.get('button[data-qa="templates-template-btn-startbuilding-adelina"]')
      .should('contain.text', 'Pradėti kurti')
      .click({ force: true })

    cy.get('button[data-qa="builder-header-btn-publishsite"]')
      .click({ force: true })
    cy.get('button[data-qa="builder-modal-beforepublish-btn"]')
      .click({ force: true })
  })
})

function assertCookieProperties() {
  cy.get('span[class="zyro-cookies__main-text body-small body-small--desktop no-margin"]')
    .should('be.visible')
    .contains('Mes ir partneriai naudojame slapukus, leidžiančius')
  cy.get('span[class="zyro-cookies__secondary-text body-small body-small--desktop no-margin"]')
    .should('be.visible')
    .contains('Kaupkite ir (ar) gaukite informaciją savo įrenginyje.')
  cy.get('span[data-qa="cookiesbanner-button-settings"]')
    .should('contain.text', 'Slapukų nustatymai')
  cy.get('a[data-qa="cookiesbanner-link-policy"]')
    .should('contain.text', 'Slapukų politikoje')
}

function assertLoginPage() {
  cy.get('button[data-qa="signin-btn-google"]')
    .should('contain.text', 'Prisijungti su Google')
  cy.get('button[data-qa="signin-btn-apple"]')
    .should('contain.text', 'Prisijungti su Apple')
  cy.get('button[data-qa="signin-btn-facebook"]')
    .should('contain.text', 'Prisijungti su Facebook')
  cy.get('a[data-qa="auth-linkto-/signup"]')
    .should('contain.text', 'Susikurti paskyrą')
  cy.get('a[data-qa="auth-linkto-/signup"]')
    .should('contain.text', 'Susikurti paskyrą')
  cy.get('svg[data-qa="header-link-zyrologo"]')
    .should('be.visible')
  cy.get('h1[class="auth__title h2 h3--desktop"]')
    .should('contain.text', 'Prisijunk prie Zyro paskyros')
    .and('be.visible')
}

function assertDashboardPage() {
  cy.get('header[data-qa="dashboard-header-desktop"]')
    .should('be.visible')
  cy.get('div[data-qa="popupwindow-icon-userprofile"]')
    .should('be.visible')
  cy.get('div[data-qa="header-link-whats-new"]')
    .should('be.visible')
  cy.get('p[data-qa="sites-text-websites"]')
    .should('contain.text', 'Svetainės')
    .and('be.visible')
}

function assertCreateWebTypesPage() {
  cy.get('button[data-qa="wizard-btn-choosetemplate"]')
    .should('contain.text', 'Rinktis šabloną')
    .and('be.visible')
  cy.get('h4[class="wizard__item-title h4 h4--desktop"]')
    .should('contain.text', 'Naudotis dizaino šablonu')
    .and('be.visible')
  cy.get('button[data-qa="wizard-btn-generator"]')
    .should('contain.text', 'Susigeneruoti svetainę')
    .and('be.visible')
  cy.get('h4[class="wizard__item-title h4 h4--desktop"]')
    .should('contain.text', 'Naudotis generatoriumi')
    .and('be.visible')
  cy.get('button[data-qa="wizard-btn-fromscratch"]')
    .should('contain.text', 'Kurti svetainę')
    .and('be.visible')
  cy.get('h4[class="wizard__item-title h4 h4--desktop"]')
    .should('contain.text', 'Naudotis tuščiu šablonu')
    .and('be.visible')
  cy.get('p[class="wizard__text h4 h4--desktop"]')
    .should('contain.text', 'Pasirink, kaip nori pradėti kurti svetainę')
    .and('be.visible')
}

function assertTemplatePage() {
  cy.get('div[class="templates-page__hero grid-item-full"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-adelina"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-rikis"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-schema"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-marciacocco"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-avalon"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-niqvist"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-blick"]')
    .should('be.visible')
  cy.get('div[data-qa="templates-template-image-linas"]')
    .should('be.visible')
  cy.get('div[class="categories__container"]')
    .should('be.visible')
}
