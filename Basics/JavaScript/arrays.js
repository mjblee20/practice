/**
 * Arrays function practices.
 */

let arr = ['banana', 'orange', 'mango', 'pineapple'];

// converts an array to a string of (comma separated) array values.
console.log('toString: ' + arr.toString()); // Output: 'banana,orange,mango,pineapple'

// joins all array elements into a string.
// but in addition you can specify the separator
console.log('join: ' + arr.join(" 8 ")); // Output: 'banana 8 orange 8 mango 8 pineapple'

// removes the last element from an array. 
let arr1 = arr;
console.log('pop: ' + arr1.pop()); // Output: pineapple
console.log(arr1); // Output: ['banana', 'orange', 'mango']

// add a new element to the end of the array
// NOTE: below line returns the length of the new array.
console.log('push: ' + arr1.push('kiwi')); // Output: 5 
console.log(arr1); // Output: ['banana', 'orange', 'mango', 'kiwi']

// remove an element from the front of the array
console.log('shift: ' + arr1.shift()); // Output: 'banana';
console.log(arr1); // Output: ['orange', 'mango', 'kiwi']

// adds a new element to an array (at the beginning), and "unshifts" older elements
// NOTE: below line returns the length of the new array.
console.log('unshift: ' + arr1.unshift('banana')); // Output: 4
console.log(arr1); // Output: ['banana', 'orange', 'mango', 'kiwi']

// Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...
// Elements in arrays can be accessed 
console.log('accessing arrays: ' + arr1[0]); // Output: 'banana'
// Altering elements in arrays with indices 
arr1[0] = 'apple';
console.log('altering arrays: ' + arr1[0]); // Output: 'apple'