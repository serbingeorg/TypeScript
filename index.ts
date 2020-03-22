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
/* const testFunc = () => 1 + 1;
const testFunc2 = function () {
    return 1 + 1;
}

let mySum: (a: number, b: number) => number;
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(100, 50)); */

// objects

/* type User = { name: string, age: number, getJobs: () => string[], logName?: () => void, jobs: string[] };

let user: User = {
    name: 'SERBIN YURII',
    age: 37,
    jobs: ['a', 'b'],
    getJobs(): string[] {
        return this.jobs;
    },
    logName(): void {
        console.log(this.name)
    }
};

let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs(): string[] {
        return this.jobs;
    },
} */

/* //compilator
type User = { name: string, age: number };
const user: User = {
    name: 'Serbin Yurii',
    age: 37
};

function logUser(user: User): void {
    console.log(user.name + '' + user.age);
}

logUser(user); */

/* //special types
enum Job {
    frontend,
    backend = 50,
    designer
}

const job: Job = Job.backend;
console.log(job);

function throwNewError(err: string): never {
    throw new Error(err);
}

let newVar;
newVar = null;

let myNumber: number | null = 20;
myNumber = null; */

/* //classes
class User {
    //name: string; //public
    private isTeacher: boolean;
    protected age: number = 30;
    // public job: string;

    constructor(public name: string, public job: string) {
        //this.name = name;
        //this.job = job;
    }

    getAge(): number {
        return this.age;
    }

    public setTitle(title: boolean) {
        this.isTeacher = title;
        console.log(this.isTeacher);
    }

}

const user = new User('Serbin', 'Backend');
console.log(user);
console.log(user.getAge());
user.setTitle(false); */

//inheritance classes
class User {

    private isTeacher: boolean;
    protected age: number = 30;


    constructor(public name: string, public job: string) {

    }

    public getAge(): string {
        return this.age + '';
    }
}

class WFM extends User {
    constructor(job: string) {
        super('Yurii', job);
        this.age = 37;
    }
    getAge(): string {
        return 'Hello ' + this.age;
    }
}

const user = new User('Serbin', 'Backend');
const wfm = new WFM('Backend');
//console.log(wfm.getAge());

abstract class Car {
    model: string;
    year: number = 2010;

    abstract logINFO(info: string): void;

    getYearCar(): number {
        return this.year;
    }
}

class Mercedes extends Car {
    logINFO(info: string): void {
        console.log(info);
    }
}
const car = new Mercedes();
console.log(car);
car.logINFO('info');
console.log(car.getYearCar());