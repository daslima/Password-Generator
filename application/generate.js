export class Generate {

    getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    
    getRandomSymbol() {
        const symbols = '~!@#$%^&*()_+{}":?><;.,';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}