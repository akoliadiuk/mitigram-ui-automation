<h1 align="center">Mitigram UI Automation</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-prerequisites">Prerequisites</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-start">Start</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-test">Test</a> &#xa0; | &#xa0;
  <a href="#bulb-contribute">Contribute</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/akoliadiuk" target="_blank">Author</a>
</p>
<br>

## :dart: About ##

This project contains automated UI tests for the Login and Careers pages on Mitigram using Playwright.

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Playwright](https://playwright.dev/)
- [ESLint](https://eslint.org/)

## :white_check_mark: Prerequisites ##

Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Start ##

```bash
# Clone this project
$ git clone https://github.com/akoliadiuk/mitigram-ui-automation.git

# Access the repository directory
$ cd mitigram-ui-automation

# Install dependencies
$ npm i

# Install dependencies
$ npm install

# Create your own '.env' file
$ cp example.env .env
```

Next, fill .env file with actual credentials or leave as is to use dummy values. **DO NOT commit .env file to VCS.**

## :white_check_mark: Test ##

```bash
# Run all tests using the default(chromium) browser
$ npm run test

# Run all tests in all supported browsers headless
$ npm run test-regression

# Run smoke suite which includes @critical and @high priority test cases
$ npm run test-smoke

# Generate report after test run
$ npm run report
```
Alternatively, you can run `npx playwright test` with a variety of different [options](https://playwright.dev/docs/test-cli) to configure test run for your needs.

## :bulb: Contribute ##

### Contributions are welcome! :fire:

#### To contribute:

1. Fork the repository
2. Make desired changes to the codebase
3. Write or update test cases according to the priority guidelines below
4. Ensure all tests are passing
5. Submit a pull request explaining your changes

### :exclamation: Test Case Prioritization

All new test cases should be prioritized according to the following rules:


**Critical**

*"Must-pass" tests - failure indicates severe impact on core functionality. Focus on tests covering business-critical features and user flows. Aim for high speed and stability of these tests.*


**High**

*Important aspects of user experience - regressions cause disruption to key business logic. Prioritize tests used by a significant portion of users or affecting key workflows. Balance coverage and execution time for these tests.*


**Medium**

*Secondary features - impacting user convenience or specific tasks. Regressions might require future attention but won’t block the whole user flow. Include tests verifying edge cases and less-essential functionalities.*


**Low**

*Exploratory tests or functionality rarely used - low impact on overall quality. Consider deferring these tests or running them less frequently. Focus on improving coverage, run time and stability of higher-priority tests first.*


:grey_exclamation:**Important: in order to run and maintain tests based on priority, mark them accordingly, with these tags in test description:**
- `@critical`
- `@high`
- `@medium`
- `@low`


**Note:** priorities for the existing test should be reviewed on a regular basis and updated accordingly. Here are the top factors that tend to change so should be taken into account updating priority:
- **business risk** - how important the feature is for the end user, what is the risk for it to brake
- **requirement volatility** - how frequently the requirement changes
- **fault proneness** - how error-prone a requirement has been in previous versions of software


## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.



Made with :heart: by <a href="https://github.com/akoliadiuk" target="_blank">Andrii Koliadiuk</a>
&#xa0;

<a href="#top">:arrow_up: Back to top</a>
