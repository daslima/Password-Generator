import PageEL from "../elements/PageEL";

const NUMBER = /^[0-9]+$/;
const LOWERCASE = /^[a-z][a-z0-9_.]*$/;
const UPPERCASE = /^([A-Z][A-Z]+)+$/

class Verify {

    onlyNumbers(){
        cy.get(PageEL.inputNumber()).check().should('be.checked')
        this.generate();
        this.assertResult(NUMBER);
    };

    onlyLowercase(){
        cy.get(PageEL.inputLowerCase()).check().should('be.checked');
        this.generate();
        this.assertResult(LOWERCASE);
    };

    onlyUppercase(){
        cy.get(PageEL.inputUpperCase()).check().should('be.checked');
        this.generate();
        this.assertResult(UPPERCASE);
    };

    assertResult(regex){
        cy.get(PageEL.divViewBox()).then((value) => {
            let isValid = value.text().match(regex) ? true : false;
            expect(isValid).equal(true);
        });
    };
    
    generate(){
        cy.get(PageEL.btnGeneratePassword()).click({ force: true});
    };
}

export default new Verify;