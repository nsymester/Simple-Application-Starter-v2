import { Selector } from 'testcafe';

/**
 * @desc TestCafe example test
 */

// declare a fixture
fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

// My first test
test('My First test', async t => {});

// Performing ACTIONS
test('My Second test', async t => {
  await t.typeText('#developer-name', 'John Smith').click('#submit-button');
});

// Observing page STATE
test('My Third test', async t => {
  await t.typeText('#developer-name', 'John Smith').click('#submit-button');

  const articleHeader = await Selector('.result-content').find('h1');

  // Obtain the text of the article header
  let headerText = await articleHeader.innerText;
});

// ASSERTION results
test('My Fourth test', async t => {
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')

    // Use the assertion to check if the actual header text id equal to the expected one
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, John Smith!');
});
/**
 * Acceptance Criteria [Short Name]
 * GIVEN [context]
 * WHEN [Event1] [Event2] [Etc.]
 * THEN [Outcome1] [Coutcome2] [Etc.]
 */
