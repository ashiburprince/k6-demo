# k6 Performance/Load Testing Project

This project is designed to demonstrate performance and load testing using k6. It includes various test scripts to validate the application's performance under different conditions.

## Project Structure

```
k6-demo
├── src
│   ├── config
│   │   └── environment.js
│   ├── tests
│   │   ├── smoke.js
│   │   ├── load.js
│   │   └── stress.js
│   └── utils
│       ├── helpers.js
│       └── data.js
├── scripts
│   └── run-tests.sh
├── package.json
├── k6.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [k6](https://k6.io/docs/getting-started/installation/) installed on your machine.
- Node.js and npm installed for managing dependencies.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd k6-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

You can run the tests using the provided shell script:

```bash
bash scripts/run-tests.sh
```

This will execute the smoke, load, and stress tests in sequence.

### Test Scripts

- **Smoke Test**: Located in `src/tests/smoke.js`, this script checks the availability of the application.
- **Load Test**: Located in `src/tests/load.js`, this script simulates multiple users accessing the application concurrently.
- **Stress Test**: Located in `src/tests/stress.js`, this script gradually increases the load to identify the application's breaking point.

### Configuration

Configuration settings for different environments can be found in `src/config/environment.js`. Adjust the base URL and authentication tokens as needed.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.