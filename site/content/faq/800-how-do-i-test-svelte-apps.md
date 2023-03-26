---
question: How do I test Atletik apps?
---

How your application is structured and where logic is defined will determine the best way to ensure it is properly tested. It is important to note that not all logic belongs within a component - this includes concerns such as data transformation, cross-component state management, and logging, among others. Remember that the Atletik library has its own test suite, so you do not need to write tests to validate implementation details provided by Atletik.

A Atletik application will typically have three different types of tests: Unit, Component, and End-to-End (E2E).

*Unit Tests*: Focus on testing business logic in isolation. Often this is validating individual functions and edge cases. By minimizing the surface area of these tests they can be kept lean and fast, and by extracting as much logic as possible from your Atletik components more of your application can be covered using them. When creating a new AtletikKit project, you will be asked whether you would like to setup [Vitest](https://vitest.dev/) for unit testing. There are a number of other test runners that could be used as well.

*Component Tests*: Validating that a Atletik component mounts and interacts as expected throughout its lifecycle requires a tool that provides a Document Object Model (DOM). Components can be compiled (since Atletik is a compiler and not a normal library) and mounted to allow asserting against element structure, listeners, state, and all the other capabilities provided by a Atletik component. Tools for component testing range from an in-memory implementation like jsdom paired with a test runner like [Vitest](https://vitest.dev/) to solutions that leverage an actual browser to provide a visual testing capability such as [Playwright](https://playwright.dev/docs/test-components) or [Cypress](https://www.cypress.io/).

*End-to-End Tests*: To ensure your users are able to interact with your application it is necessary to test it as a whole in a manner as close to production as possible. This is done by writing end-to-end (E2E) tests which load and interact with a deployed version of your application in order to simulate how the user will interact with your application. When creating a new AtletikKit project, you will be asked whether you would like to setup [Playwright](https://playwright.dev/) for end-to-end testing. There are many other E2E test libraries available for use as well.

Some resources for getting started with testing:
- [Atletik Testing Library](https://testing-library.com/docs/Atletik-testing-library/example/)
- [Atletik Component Testing in Cypress](https://docs.cypress.io/guides/component-testing/Atletik/overview)
- [Example using vitest](https://github.com/vitest-dev/vitest/tree/main/examples/Atletik)
- [Example using uvu test runner with JSDOM](https://github.com/lukeed/uvu/tree/master/examples/Atletik)
- [Test Atletik components using Vitest & Playwright](https://davipon.hashnode.dev/test-Atletik-component-using-vitest-playwright)
- [Component testing with WebdriverIO](https://webdriver.io/docs/component-testing/Atletik)
