#!/bin/bash

# Navigate to the src/tests directory
cd src/tests

# Run the smoke test
echo "Running smoke test..."
k6 run smoke.js

# Run the load test
echo "Running load test..."
k6 run load.js

# Run the stress test
echo "Running stress test..."
k6 run stress.js

echo "All tests completed."