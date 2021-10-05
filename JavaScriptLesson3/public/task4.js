/**
 * 
 */
function filterRange(array, a, b) {
	let newArray = [];

	if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
		console.log("A number outside the array indices is entered!");
	} else {
		for (let i = a; i < b; i++) {
			if (!isNaN(array[i])) {
				newArray.push(array[i]);
			}
		}
	}
	
	return newArray;
}

let numbers = ["Jazz", 0, 1, 2, 4, "Apple", 5, 6, "Number" ];
console.log(filterRange(numbers, 2, 8));