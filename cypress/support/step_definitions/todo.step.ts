import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { expect } from 'chai';
import Name from '../typings/name'

const baseAPIUrl = Cypress.config('baseUrl');

Given('the API is accessible', () => {
  cy.request({
    method: 'GET',
    url: `/?name`,
    failOnStatusCode: false,
  }).as('apiResponse').then((response) => {
    expect(response.status).to.eq(200);
  });
});

When('I provide the name {string} to the API', (name: string) => {
  cy.request({
    method: 'GET',
    url: `/?name=${name}`,
    failOnStatusCode: false,
  }).as('apiResponse');
});

Then('the response should be {int} and contain the correct JSON structure', (res: number) => {
  cy.get<Name>('@apiResponse').then((response) => {    
    expect(response.status).to.eq(res);
    expect(response.body.name).to.be.a('string');
    expect(response.body.age).to.satisfy((age: number | null) => age === null || typeof age === 'number');
    expect(response.body.count).to.be.a('number');
  }); 
});

Then('the name should be {string}', (name: string) => {
  cy.get<Name>('@apiResponse').then((response) => {
    expect(response.body.name).to.eq(name);
  });
});

Then('the age should be {string}', (expectedAge: string) => {
  cy.get<Name>('@apiResponse').then((response) => {
    expect(response.body.age).to.eq(expectedAge === 'null' ? null : Number(expectedAge));
  });
});
