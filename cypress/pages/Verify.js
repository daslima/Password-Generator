class Verify {

    onlyNumbers(){
        cy.get('input[id="number"]').check();
        cy.get('input[id="number"]').should('be.checked');
        this.generate();
        this.assertResult(/^[0-9]+$/);
    };

    onlyLowercase(){
        cy.get('input[id="lowercase"]').check();
        cy.get('input[id="lowercase"]').should('be.checked');
        this.generate();
        this.assertResult(/^[a-z][a-z0-9_.]*$/);
    }

    assertResult(regex){
        cy.get('.result__veiwbox').then((value) => {
            let isValid = value.text().match(regex) ? true : false;
            expect(isValid).equal(true);
          });
    }

    generate(){
        cy.get('#generate').click();
    }

}

export default Verify;