class Verify {

    onlyNumbers(){
        cy.get('input[id="number"]').should('be.checked');
        this.generate();
        cy.get('.result__veiwbox').then((value) => {
            let isValid = value.text().match(/^[0-9]+$/) ? true : false;
            expect(isValid).equal(true);
          });
    };

    generate(){
        cy.get('#generate').click();
    }

}

export default Verify;