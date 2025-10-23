const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const GetUserPage = require("../../POM/GetUserPage");

let userId;
let invalidUserId = 99999999;

before(() => {
    cy.readFile('cypress/fixtures/createdUserId.json').then((data) => {
        userId = data.id;
        expect(userId).to.exist;
    });
});

Given('I have a valid user ID', () => {
    expect(userId).to.exist;
});

Given('I have an invalid user ID', () => {
    cy.wrap(invalidUserId).as('invalidId');
});

When('I get the user details', function () {
    const id = this.invalidId || userId;
    const valid = !this.invalidId;

    GetUserPage.getUserById(id, valid).then((response) => {
        cy.wrap(response).as('getResponse');
    });
});

Then('the user details should be correct', function () {
    const response = this.getResponse;
    expect(response.status).to.eq(200);
    expect(response.body.id).to.eq(userId);
});

Then('the API should return a 404 error', function () {
    const response = this.getResponse;
    expect(response.status).to.eq(404);
});
