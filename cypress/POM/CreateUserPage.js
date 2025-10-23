const { apiEndpoints } = require('../ObjectRepo/apiEndPoints');
const { generateRandomEmail } = require('../support/Utils/randomMail');

class CreateUserPage {
    createUser(payload, valid = true) {
        if (valid) payload.email = generateRandomEmail(payload.email);

        return cy.request({
            method: 'POST',
            url: `${apiEndpoints.baseUrl}${apiEndpoints.users.create}`,
            headers: {
                Authorization: `Bearer ${apiEndpoints.token}`,
                'Content-Type': 'application/json'
            },
            failOnStatusCode: valid,
            body: payload
        });
    }
}

module.exports = new CreateUserPage();
