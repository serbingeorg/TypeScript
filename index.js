/* //string
let str: string = 'string!';

//number
let num: number = 10;

//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

//other
let unknown: string | boolean = '1';
unknown = true;

//Array
let numArray1: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];

let strArray1: string[] = ['1', '2', '3'];
let strArray2: Array<string> = ['1', '2', '3'];

let boolArray1: boolean[] = [true, false];
let boolArray2: Array<boolean> = [true, false];

//tuples
let array: [number, number, string] = [1, 2, '3'];

let array2: [boolean, string, number] = [true, '3', 2]; */
var user = {
    name: 'Serbin Yurii',
    age: 37
};
function logUser(user) {
    console.log(user.name + '' + user.age);
}
logUser(user);
