/// <reference types='Cypress'/>

describe('REST API Test with Cypress', () => {
	it('API Test - Validate Status Code', () => {
		cy.request('https://api.chucknorris.io/jokes/random').as('chuckJoke');

		cy.get('@chuckJoke').its('status').should('equal', 200);
	});
});
