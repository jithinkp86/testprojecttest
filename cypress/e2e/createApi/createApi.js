const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const CreateUserPage = require("../../POM/CreateUserPage");

Given('I have the GoRest API endpoint', () => {
    cy.log('API Base URL is configured in environment variables.');
});

When('I create a new user with valid data', () => {
    cy.fixture('createUser').then((data) => {
        CreateUserPage.createUser(data.validUser, true).then((response) => {
            expect(response.status).to.eq(201);
            const userId = response.body.id;
            cy.writeFile('cypress/fixtures/createdUserId.json', { id: userId });
            cy.wrap(response.body).as('createdUser');
        });
    });
});

When('I create a new user with invalid email', () => {
    cy.fixture('createUser').then((data) => {
        CreateUserPage.createUser(data.invalidUser, false).then((response) => {
            cy.wrap(response).as('createErrorResponse');
        });
    });
});

Then('the user should be created successfully', function () {
    expect(this.createdUser).to.have.property('id');
});

Then('the API should return an error', function () {
    const response = this.createErrorResponse;
    expect(response.status).to.be.oneOf([422, 400]);
});
