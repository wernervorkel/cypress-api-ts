# Cypress Setup Guide

This README provides steps to set up and run Cypress for api testing using cucumber.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running Tests](#running-tests)

---

### Requirements

- **Node.js**: Cypress requires Node.js (version 20 or higher)
- **npm** (Node Package Manager version 10 or higher) or **yarn**

### Installation

To install Cypress, follow these steps:

1. **Project Installation:**
    ```bash
    npm install
    ```

### Configuration

1. **Open Cypress:**
    ```bash
    npx cypress open
    ```

   This command opens the Cypress Test Runner:

```
cypress/ 
├── e2e
    └──api 
└── support
    ├──step_definitions
    └──typings
```


### Running Tests

1. **Running Cypress in Interactive Mode:

```bash
npx cypress open
```
2. **This will launch the Cypress Test Runner with a GUI.

Running Cypress in Headless Mode:

```bash
npx cypress run
```
Use this command for running tests in headless mode (useful for CI/CD pipelines).
