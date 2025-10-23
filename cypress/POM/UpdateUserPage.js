const { apiEndpoints } = require('../ObjectRepo/apiEndPoints');
const { generateRandomEmail } = require('../support/Utils/randomMail');

class UpdateUserPage {
    updateUserById(id, payload, valid = true) {
        if (valid) payload.email = generateRandomEmail(payload.email);

        return cy.request({
            method: 'PUT',
            url: `${apiEndpoints.baseUrl}${apiEndpoints.users.updateById(id)}`,
            headers: {
                Authorization: `Bearer ${apiEndpoints.token}`,
                'Content-Type': 'application/json'
            },
            failOnStatusCode: valid,
            body: payload
        });
    }
}

module.exports = new UpdateUserPage();
