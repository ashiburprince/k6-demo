export default function () {
    const url = __ENV.BASE_URL || 'http://localhost:3000'; // Use environment variable or default to localhost
    const res = http.get(url);

    // Check if the response status is 200
    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    // Optionally log the response time
    console.log(`Response time: ${res.timings.duration} ms`);
}