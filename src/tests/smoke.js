// File: /k6-demo/k6-demo/src/tests/smoke.js

import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from '../config/environment.js';

export default function () {
    const response = http.get(`${BASE_URL}`);

    check(response, {
        'is status 200': (r) => r.status === 200,
        'response time is less than 200ms': (r) => r.timings.duration < 200,
    });
}