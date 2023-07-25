import { Generate } from "./generate.js";
const generate = new Generate();

const generateBtn = document.getElementById('generate');

const copyBtn = document.getElementById("copy-btn");
const copyInfo = document.querySelector('.result__info.right');
const copiedInfo = document.querySelector(".result__info.left");
const resultContainer = document.querySelector('.result');
const resultEl = document.getElementById('result');

let generatedPassword = false;
let resultContainerBound = {left: resultContainer.getBoundingClientRect().left,top: resultContainer.getBoundingClientRect().top};

resultContainer.addEventListener('mousemove', e => {
	resultContainerBound = {left: resultContainer.getBoundingClientRect().left,top: resultContainer.getBoundingClientRect().top};
	
	if(generatedPassword){
		copyBtn.style.opacity = '1';
		copyBtn.style.pointerEvents = 'all';
		copyBtn.style.setProperty('--x', `${e.x - resultContainerBound.left}px`);
		copyBtn.style.setProperty('--y', `${e.y - resultContainerBound.top}px`);
	}
	else {
		copyBtn.style.opacity = '0';
		copyBtn.style.pointerEvents = 'none';
	}
});

window.addEventListener('resize', e => {
	resultContainerBound = {
		left: resultContainer.getBoundingClientRect().left,
		top: resultContainer.getBoundingClientRect().top,
	};
});

copyBtn.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) 
		return;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	
	copyInfo.style.transform = "translateY(200%)";
	copyInfo.style.opacity = "0";
	copiedInfo.style.transform = "translatey(0%)";
	copiedInfo.style.opacity = "0.75";
});


//--------------------------------------------------------- COPY TEXT INPUT

resultContainer.addEventListener('mousemove', e => {
	resultContainerBound = {left: resultContainer.getBoundingClientRect().left,top: resultContainer.getBoundingClientRect().top};
	
	if(generatedPassword){
		copyBtn.style.opacity = '1';
		copyBtn.style.pointerEvents = 'all';
		copyBtn.style.setProperty('--x', `${e.x - resultContainerBound.left}px`);
		copyBtn.style.setProperty('--y', `${e.y - resultContainerBound.top}px`);
	}
	else {
		copyBtn.style.opacity = '0';
		copyBtn.style.pointerEvents = 'none';
	}
});

window.addEventListener('resize', e => {
	resultContainerBound = {
		left: resultContainer.getBoundingClientRect().left,
		top: resultContainer.getBoundingClientRect().top,
	};
});

copyBtn.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) 
		return;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	
	copyInfo.style.transform = "translateY(200%)";
	copyInfo.style.opacity = "0";
	copiedInfo.style.transform = "translatey(0%)";
	copiedInfo.style.opacity = "0.75";
});

//-------------------------------------------------------------- INPUT RANGE

const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");
const sliderProps = {fill: "#1d918c", background: "rgba(255, 255, 255, 0.214)"};
const lengthEl = document.getElementById('slider');

function setLengthValue(value){
    document.querySelector(".lengthText").innerText = value == 0 ? 4 : value;
}

function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
    let value = sliderValue.getAttribute("data-length");
    setLengthValue(value)
}

slider.querySelector('input').addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});

applyFill(slider.querySelector("input"));

//-------------------------------------------- Generate Password
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById("symbol");

const randomFunc = {lower: generate.getRandomLower, upper: generate.getRandomUpper, 
					number: generate.getRandomNumber, symbol: generate.getRandomSymbol};

function generatePassword(length, lower, upper, number, symbol) {

	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if (typesCount === 0) 
		return '';
	

	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length);
}

function disableOnlyCheckbox() {
	let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(el => el.checked)
	totalChecked.forEach(el => {
		if(totalChecked.length == 1){
			el.disabled = true;
		}else {
			el.disabled = false;
		}
	})
}

[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(el => {
	el.addEventListener('click', () => {
		disableOnlyCheckbox()
	})
})

generateBtn.addEventListener("click", () => {
	generatedPassword = true;
	copyInfo.style.transform = 'translateY(0%)';
	copyInfo.style.opacity = "0.75";
	copiedInfo.style.transform = "translatey(200%)";
	copiedInfo.style.opacity = "0";

	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	generatedPassword = true;
	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});