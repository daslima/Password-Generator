class PageEL {

    //Inputs
    inputNumber = () => 'input[id="number"]';
    inputLowerCase = () => 'input[id="lowercase"]';
    inputUpperCase = () => 'input[id="uppercase"]';
    inputSymbol = () => 'input[id="symbol"]';

    //Buttons
    btnGeneratePassword = () => 'button[id="generate"]';

    //Divs
    divViewBox = () => '.result__veiwbox';

}

export default new PageEL;