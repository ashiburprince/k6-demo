export default {
    // Define the options for the k6 test
    options: {
        vus: 100, // Number of virtual users
        duration: '30s', // Duration of the test
        thresholds: {
            http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
        },
    },
    // Define the setup function to initialize any required data
    setup: function() {
        // Setup code can go here
    },
    // Define the teardown function to clean up after tests
    teardown: function(data) {
        // Teardown code can go here
    },
};