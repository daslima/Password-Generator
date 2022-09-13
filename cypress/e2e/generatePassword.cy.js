/// <reference types="cypress" />

import Verify from '../pages/Verify';

describe('Checking generated passwords', () => {
  
  let verify = '';

  beforeEach(() => {
    cy.visit('index.html');
    verify = new Verify();
  })

  it('Generate numbers only', () => {
        verify.onlyNumbers();
  });

  it('Generate symbols only', () => {
      verify.onlyLowercase();
  });

})
