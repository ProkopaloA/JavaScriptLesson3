/**
 * 
 */
function camelize(string) {
	let stringToWords = [];

	stringToWords = string.split("-");

	for (i = 1; i < stringToWords.length; i++) {
		stringToWords[i] = stringToWords[i][0].toUpperCase() + stringToWords[i].slice(1);
	}

	let newString = stringToWords.join("");
	console.log(newString);
}

let string = "my-short-string";
camelize(string);