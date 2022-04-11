# websiteCreationFlowTesting
Welcome! This repository contains website creating test in Zyro written on a Cypress framework.

 ## How to set up this project ##
1. Clone this repository to your machine
2. [Setup & Configuration](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)
3. Download and install latest version of Cypress

 ## To run test  ##
1. [Launching tests is best described in Cypress' native documentation](https://docs.cypress.io/guides/getting-started/testing-your-app.html)

 ## Info  ##
Please note you will need to add this to cypress.js file.

{
    "defaultCommandTimeout": 30000,
    "viewportWidth": 1536,
    "viewportHeight": 960,
    "baseUrl": "https://zyro.com/",
    "env": {
        "email": "", // add the email
        "password": "" // add the password
    }
}

