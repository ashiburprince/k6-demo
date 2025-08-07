module.exports = {
    baseUrl: 'https://your-api-url.com',
    authToken: 'your-auth-token',
    environments: {
        development: {
            baseUrl: 'https://dev-api-url.com',
            authToken: 'dev-auth-token',
        },
        staging: {
            baseUrl: 'https://staging-api-url.com',
            authToken: 'staging-auth-token',
        },
        production: {
            baseUrl: 'https://api-url.com',
            authToken: 'prod-auth-token',
        },
    },
};