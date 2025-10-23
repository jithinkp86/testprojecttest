const { apiEndpoints } = require('../ObjectRepo/apiEndPoints');

class GetUserPage {
    getUserById(id, valid = true) {
        return cy.request({
            method: 'GET',
            url: `${apiEndpoints.baseUrl}${apiEndpoints.users.getById(id)}`,
            headers: { Authorization: `Bearer ${apiEndpoints.token}` },
            failOnStatusCode: valid
        });
    }
}

module.exports = new GetUserPage();
