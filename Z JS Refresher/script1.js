// // Var can be redeclarable and updatable.
// var n = 12;
// console.log(n);
// var n = 23;
// console.log(n);

// let p = 24;
// console.log(p);
// // let p = 25; // This is not redeclarable.
// p = 11;
// console.log(p);

// let m = 455;
// console.log(m)

// let p = null; // Object
// console.log(typeof(p)); // show variable type.

// Object. ------------------------

// const obj1 = {
//     nm: "nobel",
//     "work": null
// }
// console.log(obj1);

// obj1["work"] = "noname";
// console.log(obj1["work"]);

// Concatination. ------------------
// let str = 9;
// let char = "with";
// let num = 7;

// console.log(str + num);

// let add = str + num;
// let add1 = str + " char " + num;
// console.log(add);
// console.log(typeof(add)); // Number type
// console.log(typeof(add1)); // String type
// Operators. ----------------------

// let n = 24;
// console.log(n); // n = 24
// let t = n++;
// console.log(t); // m = 24
// console.log(n); // n = 25

// let k = 27;
// let m = ++k; // k = 28
// m += k;
// console.log(m); // m = 56
// console.log(k); // k = 28

// console.log("The Value of numbers is: ", n + k);

// let con = 5, num = con+5;
// console.log("If con == num: ", con == num); // false

// console.log(con<num && con!=num);

// Window Objects. ----------------------

// let tag = prompt("Enter your full name:");
// console.log(tag);

// alert("There is an alert");/

// let strn = "35";
// strn = Number.parseInt(strn); // To Number
// console.log(strn);

// let game = confirm("Do you want to play a game");
// if(game == true) {
//     let num = prompt("Enter your number");
//     alert("This is your number: " + num);
// } else {
//     alert("Its all right");
// }

// Ternary Operator. --------------------

// let exp1 = 111, exp2 = 112;
// console.log("exp1 < exp2:", exp1 < exp2 ? "True" : "False");

// let sum = 1;

// for(let i=1; i<=5; i++) {
//     sum *= i;
// }

// console.log(sum);

// Loops & Array. ---------------------

// let arr = [], i=0, n;

// do{
//     n = prompt("Enter the array element");
//     arr[i] = n;
//     i++;
// }while((n != 0) && (n != null));

// console.log("This is an array\n", arr);

// for(let i=0;i<arr.length;i++) {
//    console.log("Element at "+ i + " is \"" + arr[i] + "\"");
// }

// let obj = {
//    name1 : "Aman",
//    name2 : "Arjun",
//    name3 : "Sachin",
//    name4 : "Sohel",
//    name5 : "Unaid",
//    name6 : "Yash"
// }

// for(let a in obj){
//    console.log("marks of "+ a +" are " + obj[a]);
// }

// let c = "0ToString";

// for(let b in c) {
//    console.log(b);
// }

// Functions. --------------------

// function oneplusAvg(x, y) {
//    console.log("Done");
//    return 1+(x+y)/2;
// }

// let a = 2, b = 3, c = 4;

// console.log("oneplus average of a, b is", oneplusAvg(a, b));
// console.log("oneplus average of a, c is", oneplusAvg(a, c));
// console.log("oneplus average of b, c is", oneplusAvg(b, c));

// const hello = () => {
//    console.log("Hello, how are you?");
//    return("Hi");
// }

// let cu = hello();
// console.log(cu);

// const sum = (p, q) => {
//    return p + q;
// }

// let a = 3, b = 4;
// console.log("The sum is", sum(a, b));


// String. --------------------
// let name1 = "SuperBoy";
// console.log(name1.length);

// console.log(name1);

// for( let c of name1) {
//    console.log(c);
// }

// console.log(`${name1} is my best friend.`);

// let fname = "someThing";
// let ename = "Water";

// console.log(fname[4] + fname[8]);
// console.log(ename.length);
// console.log(ename.toUpperCase());
// console.log(ename.toLowerCase());
// console.log(fname.slice(2));
// console.log(fname.slice(2, 5));
// console.log(fname.replace("Thing", "How"));

// let space = "   shut   up   !.  ";
// console.log(space.trim());

// const sentence = "What is going in your life";
// const word = "fat";
// console.log(sentence.startsWith("What"));
// console.log(sentence.startsWith(word));
// console.log(sentence.endsWith("life"));

// console.log(sentence.includes("going"));

// console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence.`);

// let str = "Please give me Rs 2000";
// console.log(str.slice(18));
// console.log(str.replace("Rs 2000", "Holiday"));

// Array. --------------------------

// let close = [97, 46, 38, 24, false, null, "Fruits"];

// for(let c of close) {
//     console.log(c);
// }

// // changing the array value.
// close[4] = "101 Update";
// console.log(close[4]);

// close[7] = "New element";
// console.log(close[7]);
// console.log("length of array is", close.length);

// let a = prompt("Enter number to array you want");
// a = Number.parseInt(a);

// for(let i = 0; i<a; i++) {
//     console.log(close[i]);
// }

// let cnar = [97, 46, 3, 24, ,55, 93, 4, 7, false, null, "Fruits"];
// // This contains an empty element.

// console.log(cnar.toString());
// // String doesn't display null value;

// let cut = cnar.join("_");
// let start = cnar.shift(); // Modify an array from start;
// let out = cnar.unshift(95); // Modify an array & give total no;

// console.log(cut, start, out);
// console.log(cnar);

// console.log(cnar.pop(2));
// console.log(cnar.push(5555)); // Give total no of elements;
// console.log(cnar);

// delete cnar[3];
// console.log(cnar); // Doesn't effect array lenght.

// let newArr = [25, 34, 47];
// let newArray = cnar.concat(newArr);
// console.log(newArray);

// let compare = (a, b) => {
//     return a - b;
// }

// // It affects & modify original array.
// console.log(cnar.sort());
// console.log(cnar.sort(compare));
// console.log(cnar);
// console.log(cnar.reverse());

// let n = cnar.slice(2); // Delete Value by index.

// console.log(cnar.splice(1, 3, 45, 46, 47)); // Replaced values in output.
// console.log(cnar); // Added values array.
// console.log(n);

// To make string to array.
// var str = 'one two three four five';

// const ma = str.split(" ").length;
// const p1 = str.split(" ");
// console.log(p1);

// Array using loops. ----------------------------
// let lmn = [3, 45, 1, 5, 9];

// lmn.forEach((elem) => {
//     console.log(elem * elem);
// });

// let name1 = "myname";
// let arr = Array.from(name1);
// console.log(arr);

// console.log("Using the for of loop: ");
// for(let item of lmn) {
//     console.log(item);
// }

// console.log("Using the For in loop: ");
// for(let item in lmn) {
//     console.log(lmn[item]);
// }

// Map, Filter and Reduce. -------------------
// let arr = [33, 44, 55, 66, 77];

// let amap = arr.map((value) => {
//     console.log(value);
//     return value+1;
// });

// console.log(amap);

// let afilt = arr.filter((value) => {
//     return value < 50;
// });

// console.log(afilt);

// let aredu = arr.reduce((h1, h2) => {
//     return (h1 + h2) / arr.length;
// });

// Getting array elements in input.
// let narr = [1, 2, 5, 7, 8];

// // let n;
// // do {
// //     n = prompt("Enter the new element in array.");
// //     n = Number.parseInt(n);
// //     narr.push(n); // This add elements in array.
// // } while(n != 0);

// for(let i=0; i<n; i++) {
//     let inar = prompt("Enter the array element.");
//     narr[i] = inar; // This replace array elements.
// }
// console.log(narr);

// Practise set on Map, Filter and Array.
// let narr = [1, 2, 5, 6, 8, 9];
// narr.push(24);
// console.log(narr);

// function printSquare(array) {
//     let squares = [];
//     array.forEach(element => {
//         let square = element * element;
//         console.log(square); // This get printed whenever functionName used.
//         squares.push(square);
//     });
//     return squares;
// }

// let squareArray = printSquare(narr);
// console.log(squareArray);

// // Modify Each value.
// let sqarr = narr.map((value) => {
//     return value * value;
// });

// console.log(sqarr);


// // Fetching specific values.
// let nwarr = narr.filter((value) => {
//     return (value % 2 == 0);
// });

// console.log(nwarr); 

// // Getting 1 value by specific operations.
// let nnar = [1, 2, 3, 4, 5];

// let farr = nnar.reduce((f1, f2) => {
//     return f1 * f2;
// });

// console.log(farr);  

// Exercise 1: ----------------------
// let rnum = Math.random() * 100;
// rnum = Number.parseInt(rnum);
// let mnum;
// let score = 100;

// while(mnum != rnum) {
//     score = score - 1;
//     mnum = prompt("Enter the guessing number");

//     if(mnum == rnum) {
//         console.log(`This is correct guess, the number is ${rnum}`);
//         console.log(`your score is ${score}`);
//     }   else if((mnum < rnum) && (mnum > 0)) {
//         console.log("Your guess is smaller");
//     }   else if((mnum > rnum) && (mnum <= 100)) {
//         console.log("Your guess is bigger");
//     }   else {
//         console.log("Your guess is not valid");
//     }
// }


// Console object. ---------------------
// console.table(narr); // Array index & element in table form.

// let obj = {
//     1 : 34,
//     2 : "242",
//     3 : "Myname",
//     if : {
//         first: "11",
//         second: "22"
//     }
// }

// console.table(obj["if"]);
// console.log(console);
// console.info("This is info statement");
// console.error("This is an error");
// console.assert(4>45); // Assertion fail.
// console.warn("This the warning");
// console.time(console.table(obj["if"]));
// console.timeEnd(console.table(obj["if"]));

// let deleted = confirm("Do want to delete it.");
// let undeleted = "This is not deleted";

// if(deleted == true) {
//     console.log("This is deleted");
// } else {
//     console.log(undeleted);
// }

// let timeout = setTimeout(() =>{
//     console.clear();
// }, 2000);
