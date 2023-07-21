/// <reference types="cypress" />

import Verify from '../pages/Verify';

describe('Checking generated passwords', () => {
  
  beforeEach(() => cy.visit('index.html'))

  it('Generate numbers only', () => {
      Verify.onlyNumbers();
  });

  it.only('Generate lowercase only', () => {
      Verify.onlyLowercase();
  });

  it('Generate uppercase only', () => {
    Verify.onlyUppercase();
  });

})
