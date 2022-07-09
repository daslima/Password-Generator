//import { Custom } from "./Custom.js";
//const cls = new Custom();

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

//------------------------------------------------
