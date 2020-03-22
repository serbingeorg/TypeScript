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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age + '';
    };
    return User;
}());
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'Yurii', job) || this;
        _this.age = 37;
        return _this;
    }
    WFM.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return WFM;
}(User));
var user = new User('Serbin', 'Backend');
var wfm = new WFM('Backend');
//console.log(wfm.getAge());
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getYearCar = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logINFO = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
car.logINFO('info');
console.log(car.getYearCar());
