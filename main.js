// DOM elements

const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = uppercaseEl.checked;

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
	// 1. Init pw var
	// 2. Filter out unchecked types
	// 3. Loop over length call generator function for each type
	// 4. Add final pw to the pw var and return

	let generatedPassword = '';

	const typesCount = lower + upper + number + symbol;

	console.log('typesCount: ', typesCount);

	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		item => Object.values(item)[0]
	);

	console.log('typesArr: ', typesArr);

	if (typesCount === 0) {
		return '';
	}
}

// Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
