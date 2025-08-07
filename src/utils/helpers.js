export function logResponse(response) {
    console.log(`Response time: ${response.timings.duration} ms`);
    console.log(`Response status: ${response.status}`);
}

export function validateResponse(response, expectedStatus) {
    if (response.status !== expectedStatus) {
        throw new Error(`Expected status ${expectedStatus}, but got ${response.status}`);
    }
}