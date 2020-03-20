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


//functions
// const myName: string = 'SERBIN YURII';
// const myAge: number = 37;

// function getMyName(): string {
//     return myName;
// }
// function getMyAge(age: number, prefix: string): string {
//     return prefix + ' ' + age;
// }
// // console.log(getMyName());
// console.log(getMyAge(37, 'Serbin Yurii'));

/* function consolelog(str: string): void {
    console.log(str);
}
consolelog('Test STRING'); */
const testFunc = () => 1 + 1;
const testFunc2 = function () {
    return 1 + 1;
}

let mySum: (a: number, b: number) => number;
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(50, 50));