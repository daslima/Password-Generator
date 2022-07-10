//import { Custom } from "./Custom.js";
//const cls = new Custom();

//--------------------------------------------------------- COPY TEXT INPUT

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

//-------------------------------------------------------------- INPUT RANGE

const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");
const sliderProps = {fill: "#1d918c", background: "rgba(255, 255, 255, 0.214)"};

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



generateBtn.addEventListener("click", () => {
	generatedPassword = true;
	copyInfo.style.transform = 'translateY(0%)';
	copyInfo.style.opacity = "0.75";
	copiedInfo.style.transform = "translatey(200%)";
	copiedInfo.style.opacity = "0";
});