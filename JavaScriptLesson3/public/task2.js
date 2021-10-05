/**
 * 
 */
let styles = [ "Jazz", "Blues" ];

styles.push("Rock and roll");
console.log(styles);

styles.splice(-2, 1, "Classics");
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rep", "Reggae");
console.log(styles);