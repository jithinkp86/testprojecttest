const apiEndpoints = {
    baseUrl: Cypress.env('apiUrl'),

    users: {
        create: '/public/v2/users',
        getById: (id) => `/public/v2/users/${id}`,
        updateById: (id) => `/public/v2/users/${id}`,
    },

    token: '04569675b524c2bfd8b489c5a479cc6dcb082994cc37fd7be7ff0035ff73a64d',
};

module.exports = { apiEndpoints };
