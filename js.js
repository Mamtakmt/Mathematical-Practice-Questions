// function numstr(num){
//     let numStr = num.toString()
//     let result = numStr.split('').reverse().join('')

//    return result === numStr
// }
// console.log(numstr(121))
// console.log(numstr(1211))

//..............................................................................
// let num = 10;
// let a = 0;
// let b = 1;

// console.log(a)
// console.log(b)
// for(let i = 2 ; i<num ; i++){
//     let next = a + b;
// console.log(next)
//     a=b;
//     b=next;

// }
//....................................................................

// function  isprime(num){
// if(num<=1) return false
// if(num==2) return true

// for(let i=2 ; i<=num/2 ; i++){
//     if(num%i === 0){
//         return false
//     }
// }
// return true;
// }

// console.log(isprime(7))
// console.log(isprime(12))
//............................................

// let anyStr = "mamta"

// let reversStr = ""

// for(let i = anyStr.length-1 ; i>=0 ; i--){
// reversStr += anyStr [i]


// }
// console.log(reversStr);
//......................................

// let a = [30,21,40,20]

// console.log(Math.max(...a))

// let a = [30,21,40,20]
// let max = a[0]
// a.filter((num)=>{
//     if(num>max){
//         max = num 
//     }

// })

// console.log(max)

//......................................

// let arr = [10,20,30,5]
//     let firstmax = Math.max(...arr)
//     let filtered =arr.filter(num=>num!==firstmax);
//     console.log(Math.max(...filtered))

// let arr =[4,3,2,1]
// let sum = 0;
// for (let i=0 ; i<arr.length ; i++){
//  sum += arr[i]
// }
// console.log(sum)

// let star = "*";
// let space = " ";

// for(let i=1;i<=5;i++){
//     console.log(space.repeat(5-i)+ star.repeat(i) )
// }

// let arr = [1, 2, 3, 1, 4, 5]

// let newArr = [...new Set(arr)]

// console.log(newArr)

// function exampleVar() {

//     var a = 10;
// return a;

// }
// console.log(a)

// console.log(a)
// console.log(b)
// console.log(c)
//......................................
// var a =1;
// let b = 2;
// const c=3;

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
//  }

//  const obj = {
//   name: 'Alice',
//   greet: function() {
//     console.log(Hello, ${this.name});
//   },
//   delayedGreet: function() {
//     setTimeout(this.greet, 1000);
//   }
// };

// obj.delayedGreet(); 
// function show() {

//   console.log(this);
// }
// show();
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   return `Hello, I'm ${this.name}`;
// };

// const john = new Person('John');
// delete john.sayHello;

// console.log(john.sayHello());



// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => console.log('3'));
// console.log('4');


//  console.log([] == ![]);     // ?
// console.log([] == false);   // ?
// console.log(![] == false);  // ?
// console.log(0 == '');       // ?
// console.log(0 == '0');


// const key2 = 'a';
// const key = 'b';
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// console.log(obj.key);   // ?
// console.log(obj[key]);  // ?
// console.log(obj[key2]);
//  console.log(obj['key']);

// const arr = [1, 2, 3];
// arr[10] = 4;

// console.log(arr.length);        // ?
// console.log(arr.map(x => x * 2)); // ?
// console.log(Object.keys(arr));

// const arr = [ , , 'hi' ];
// arr.forEach((x, i) => console.log(i, x));  // Only logs index 2

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]); // Will show `undefined` for empty slots
// }

// async function fetchData() {
//   try {
//     const data = await Promise.reject('Error!');
//     return data;
//   } catch (error) {
//     console.log('Caught:', error);
//   }
// }

// fetchData().then(result => {
//   console.log('Result:', result); // What gets logged?
// });


//  const obj = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, ${this.name}`);
//   },
//   delayedGreet: function() {
//     setTimeout(this.greet, 1000);
//   }
// };




// obj.delayedGreet()

// const user = { name: 'Bob', age: undefined };

// const { name, age = 30, role = 'user' } = user;

// console.log(name); // ?
// console.log(age);  // ?
// console.log(role);

// const arr = [5, null];
// const [x, y = 100] = arr;

// console.log(y); // null ❌ (default nahi laga)

// function showArgs(first, ...rest) {
//   console.log(first); // ?
//   console.log(rest);  // ?
// }

// showArgs(1, 2, 3, 4);

// function showAll() {
//   console.log(arguments);
// }

// showAll("a", "b", "c");
// // Output: [Arguments] { '0': 'a', '1': 'b', '2': 'c' }

// const person = Object.freeze({ name: 'Tom', age: 25 });
// person.age = 30;

// console.log(person.age);


// const obj = {};
// const key1 = {};
// const key2 = 'object';

// obj[key1] = 'value1';
// obj[key2] = 'value2';

// console.log(obj[key1]);


// const valA = false && console.log('A');
// const valB = true || console.log('B');


// const userSettings = { settings: null };

// const theme = userSettings.settings?.theme ?? 'default';

// console.log(theme);

// const user = { profile: null };

// // Trying to access a deep property
// const name = user.profile;

// console.log(name); // 👉 undefined ✅ (no error)

// let title = null;
// console.log(title ?? 'Untitled');   // 👉 'Untitled'

// title = undefined;
// console.log(title ?? 'Untitled');   // 👉 'Untitled'

// title = '';
// console.log(title ?? 'Untitled');   // 👉 '' (✅ not replaced)

// title = 0;
// console.log(title ?? 100);          // 👉 0 (✅ not replaced)

// function tag(strings, ...values) {
//   console.log(strings); // ?
//   console.log(values);  // ?
//   return 'processed';
// }

// const name = 'Eve';
// const result = tag`Hello, ${name}!`;

// console.log(result);

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => console.log('Microtask'));

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 0);

// const grtVal()=>{
//     console.log("hey")
// }


// var x = 10;
// function test() {
//   var x = 20;
//   if (true) {
//     var x = 30;
//     console.log(x); // ?
//   }
//   console.log(x); // ?
// }
// test();
// console.log(x);

// function testVarLet() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log("Inside block:", a, b, c); // 1, 2, 3
//   }

//   console.log("Outside block:", b); // ❌ ReferenceError
//   console.log("Outside block:", c); // ❌ ReferenceError
// }
//   console.log("Outside block:", a); // ✅ a is accessible

// testVarLet();


// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();


// var a = 'global';

// function first() {
//   var a = 'first';
//   function second() {
//     var a = 'second';
//     console.log(a); // ?
//   }
//   second();
// }
// first();
// let x = 10;

// function test() {
//   let x = 20;
//   console.log(x);
// }

// test();
// console.log(x);






// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= num/2; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// for (let i = 1; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// function isPrime(num){
//   if (num<2) return false;

//     for(let i =2 ; i<=num/2 ; i++){
//       if(num%i === 0) return false;
//     }
//     return true
// }

// for(let i = 1;i<=100;i++){
//   if(isPrime(i)){
//     console.log(i)
//   }
// }

//...............Anagram................
// function areAnagram(str1 , str2){

//     const normalization = str =>str.replace(/\s+/g,'').toLowerCase();
//     const sortedStr1 = normalization(str1).split('').sort().join('');
//     const sortedStr2 = normalization(str2).split('').sort().join('');

//     return sortedStr1===sortedStr2;

// }

// console.log(areAnagram("listen","silent"));
// console.log(areAnagram("listena","world"));

//..................Occurence of char.......................

// function countChar(str){

//     let count = {}
//     for(let i=0;i<str.length ; i++){
//         let char = str[i];
//         if(char === ' ') continue
//         if(count[char]){
// count[char] +=1;
//         }
//         else{
//             count[char] = 1;
//         }
//     }
// console.log(count);
// }
// countChar('heello');
// countChar('wo     rd');

// // Implement a function to find the maximum element in an array.

// let arr = [1,2,3,4,8]

// let max=arr[0]
// function fetchData(callback) {
  
//     callback("Data received")
// }

// fetchData((message) => {
//   console.log(message);
// });

// let map = new Map();
// map.set("name", "Alice");

// let set = new Set();
// set.add(1);

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "value");

// let weakSet = new WeakSet();
// weakSet.add(obj);


// let str = "hello";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
// }

// console.log(reverse);  // Output: "olleh"

// let str = "hello Miss"
// let vowels  = "aeiouAEIOU"
// let result = ""
// for(let i =0 ; i<=str.length ; i++){
// if( str[i] === 'a' || str[i] === 'A' || str[i] === 'e' || str[i] === 'E' || str[i] === 'i' || str[i] === 'I' || str[i] === 'o' || str[i] === 'O'  || str[i] === 'u' || str[i] === 'U'   ){
//   result += str[i]
// }}

// console.log(result)



// let arr = [1,2,1,4,1]

// let result = arr.filter((index, i)=>{
//  return arr.indexOf(index) === i
// })

// console.log(result)

// function checkPal(num){

//   let convert = num.toString()

//   let result = convert.split('').reverse().join('')
//   return result === convert
// }

// console.log(checkPal(1212))

// let a =0;
// let b =1;


// for(let i=0; i<=10 ; i++){
//  console.log(a);
//  let next = a+b;
//  a=b;
//  b=next
// }

// let arr =[1,2,5,8]

// let max = arr[0];

// arr.filter((num)=>{
// if(num > max){
//   max=num
// }
// })

// console.log(max)