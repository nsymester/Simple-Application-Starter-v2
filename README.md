# Simple Application Starter v2

## Installation

After downloading or cloning the project run the following to install the dependencies:

- `npm i`

## Operations

Once the installation process has been completed run on of the following:

- `npm run start` - for the development build

- `npm run build` - for the production build

## Testing

### Unit Tests

These tests are using Jest.

#### Installing Jest

Only needs to be installed once

```bash
npm i -g jest
```

Make sure you add the following to `package.json`, this will make sure that jests doesn't attempt to run the TestCase tests in the toor directory;

```json
"jest": {
  "modulePathIgnorePatterns": [
    "<rootDir>/__tests__"
  ]
}
```

#### Running tests

Tests are located in the `__tests__` directory and are based on a `USER STORY`

You can run a test from a command shell by calling a single command where you specify the target browser and file path.

```bash
npm run test
```

#### Viewing the Test Results

Jest will output the report in a command shell.

#### Notes on writing a Unit Test

When writing a unit test organise it according to AAA (Arrange, Act, Assert) pattern.

This is a common way of writing unit tests for a method under test.

- The **Arrange** section of a unit test method initializes objects and sets the value of the data that is passed to the method under test.

- The **Act** section invokes the method under test with the arranged parameters.

- The **Assert** section verifies that the action of the method under test behaves as expected.

From: [Microsoft's Unit test basics](https://docs.microsoft.com/en-us/visualstudio/test/unit-test-basics?view=vs-2019)

### End to End Tests

These tests run using TestCafe amd are written in JavaScript.

#### Installing TestCafe

Only needs to be installed once

```bash
npm i -g testcafe
```

#### Running tests

Tests are located in the `__tests__` directory and are based on a `USER STORY`

You can run a test from a command shell by calling a single command where you specify the target browser and file path.

```bash
testcafe chrome __tests__\test1.js
```

#### Viewing the Test Results

While the test is running, TestCafe is gathering information about the test run and outputting the report in a command shell.

#### Labeling your tests

All your tests are based off of some User Story which has multiple acceptance tests. Add the following at the beginning of each test:

```javascript
/**
 * Acceptance Criteria [Short Name]
 * GIVEN [context]
 * WHEN [Event1] [Event2] [Etc.]
 * THEN [Outcome1] [Coutcome2] [Etc.]
 */
```
