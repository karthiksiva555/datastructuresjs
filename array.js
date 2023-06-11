console.log('Arrays Practice');

const print = (arr) => console.info(arr);
const printLength = (arr) => console.log(arr.length);

// Array Literal
let array1 = []; // empty array
let array2 = [1, 2 , 3, 'siva']; // With initial values: arrays in JS can store any type, doesn't have to be same type elements
print(array2);

// Array class
let array3 = new Array();
printLength(array3);

let array4 = new Array(10, 20, 30);
print(array4);

// with initial length ; creates empty elements in array
// if you send only one parameter, it is taken as length, more than one will be taken as elements
let array5 = new Array(5);
array5.push(10);
array5.push(20);
console.info(array5);
array5[0] = 30;
print(array5);
printLength(array5);

// Array.from
let array6 = Array.from('hello'); // creates a new array from the input passed (input must be iterable like list or array)
print(array6);

const newArray = [1, 2, 3, 4];
let array7 = Array.from(newArray);
print(array7);

let array8 = Array.from([1,2,3,4,5], x => x*2); // creates a new array from array with map function; in this case every element is multiplied by 2
print(array8);

// Spread operator
const newArray1 = [1, 2, 3, 4, 5];
let array9 = [...newArray1];

// of: Create an array from the given elements
let array10 = Array.of(2,3,4,5,6);
print(array10);

let array11 = Array.of('item1','item2','item3');
print(array11);


