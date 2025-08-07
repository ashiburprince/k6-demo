// File: /k6-demo/k6-demo/src/tests/stress.js

import http from 'k6/http';
import { check, sleep } from 'k6';
import { getBaseUrl } from '../config/environment';

export const options = {
    stages: [
        { duration: '30s', target: 20 }, // ramp up to 20 users
        { duration: '1m', target: 20 },  // stay at 20 users
        { duration: '30s', target: 50 }, // ramp up to 50 users
        { duration: '1m', target: 50 },  // stay at 50 users
        { duration: '30s', target: 100 }, // ramp up to 100 users
        { duration: '1m', target: 0 },   // ramp down to 0 users
    ],
};

export default function () {
    const url = getBaseUrl();
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time is < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1);
}