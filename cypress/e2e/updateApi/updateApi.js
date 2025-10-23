const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const UpdateUserPage = require("../../POM/UpdateUserPage");

let userId;

// Read the created userId from fixture before tests
before(() => {
    cy.readFile('cypress/fixtures/createdUserId.json').then((data) => {
        userId = data.id;
        expect(userId).to.exist;
    });
});

Given('I have a valid user ID', () => {
    expect(userId).to.exist;
});

When('I update the user details with valid data', () => {
    cy.fixture('updateUser').then((data) => {
        UpdateUserPage.updateUserById(userId, data.validUpdate, true).then((response) => {
            cy.wrap(response.body).as('updatedUser');
        });
    });
});

When('I update the user details with invalid email', () => {
    cy.fixture('updateUser').then((data) => {
        UpdateUserPage.updateUserById(userId, data.invalidUpdate, false).then((response) => {
            cy.wrap(response).as('updateErrorResponse');
        });
    });
});

Then('the user details should be updated successfully', function () {
    const updatedUser = this.updatedUser;
    expect(updatedUser.name).to.eq("Tenali Updated");
    expect(updatedUser.status).to.eq("inactive");
});

Then('the API should return an error', function () {
    const response = this.updateErrorResponse;
    expect(response.status).to.be.oneOf([422, 400]);
});
