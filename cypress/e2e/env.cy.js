///<reference types ="cypress"/>
describe("Working of Cypress.Config.js and Package.js File",()=>{
    it("Verify Working",()=>{
        let url = Cypress.config().baseUrl
        cy.visit(url)
        cy.log("*********************"+Cypress.env("name"))
    })
})