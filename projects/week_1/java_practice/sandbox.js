//index.js

// --------------------Using strings with ${} and ` `--------------------
//${} will print strings better
//Ex: instead of fname + " " + lname + " is a nerd"
//Do: `${fname} ${lname} is a nerd`

// --------------------Functions--------------------
// function greet(name) {
//     console.log(`Greetings, ${name}!`);
// }

// function greetAlot(name1, name2, name3){
//     console.log(`Hello, ${name1}, ${name2}, and ${name3}`);
// }

// function addIt(num1, num2){
//     return num1 + num2;
// }

// // --------------------Rounding and parsing--------------------
// let roundMe = 2.598495;
// let parseMe = "24";

// // --------------------Formula is Math.random() * (max - min) + min--------------------
// let randomNum = Math.random() * (10 - 1) + 1;

// // --------------------Can apparently assign shit to a function-------------------
// let adder = addIt(5, 10);

// --------------------Strings--------------------
// let testString = "Jordan";
// let firstChar = testString[0];
// let thirdChar = testString[2];
// let lengthOfString = testString.length;
// let subString = testString.substring(3);
// let indexString = testString.indexOf("dan");
// let numTest = 25;
// let stringNum = numTest.toString();


// --------------------If statements--------------------
// let dressColor = "black";
// let ecoClass = "poor";
// if(dressColor == "black" && ecoClass == "rich"){
//     console.log("You may enter");
// } else if(dressColor == "black" && ecoClass != "rich"){
//     console.log("You don't have the wealth to enter this room");
// } else{
//     console.log("You just aren't built for a place like this");
// }
// These are tertiary
// console.log(dressColor == "black" ? "Solid color, enter, queen" : "Ew, you think that's fashion?");


// --------------------Random logs to test the above code--------------------
// greet("Emperor Purdy");
// greetAlot("Billy Bob", "Jimmy John", "Paulie");
// console.log(addIt(5,10));
// console.log(adder);
// console.log(Math.ceil(roundMe));
// console.log(Number.parseInt(parseMe));
// console.log(randomNum);
// console.log(`${testString} is my name, my first letter is ${firstChar} and my third letter is ${thirdChar}. I'm really glad my name isn't ${subString}`);
// console.log("Name length = " + lengthOfString)
// console.log("Dan is located at " + indexString)
// console.log(stringNum)


// --------------------For loops, while loops, do while loops, and switches--------------------
// for(let i = 0; i < 100; i++){
//     console.log("WE PRINTING BOI" + i);
// }
//
// let i = 0;
// while(i < 100){
//     console.log("While I isn't 99, we go HARD");
//     i++;
// }
//
// let i = 0;
// do{
//     console.log("Do it while I is weak, we can take him");
//     i++;
// } while(i < 100);
//
// let color = 'blue';
// switch(color){
//     case 'blue':
//         console.log("Solid color bro");
//         break;
//     case 'green':
//         console.log("I mean, it's an okay color");
//         break;
//     case 'purple':
//         console.log("The best color. Stand tall, king");
//         break;
//     default:
//         console.log("Terrible color get out");
// }

// --------------------Object Literals--------------------
// let dog = {};
// dog = {name: 'Gibbles', breed: 'Unknown breed', weight: 150};
// //Key is name, value is 'Gibbles'
// let bigMe = {
//     exists: true,
//     name: 'Jordan',
//     age: '32',
//     myFunc: function(){
//         console.log("Just a sick dude all around")
//     },
//     nested: {
//         where: "I am the object within Jordan. THE GOD HE WILL BECOME"
//     }
// }
// var lilYou = {
//     type: 'object'
// }

// //Can be called with . notation for quick access, or [] notation if you want to use variables like below
// let bracketKey = 'name';
// console.log(bigMe[bracketKey]);
// bracketKey = 'age';
// console.log(bigMe[bracketKey]);
// bigMe.myFunc();

// bigMe.exists = false;
// bigMe.exists = true;

// for (let key in bigMe){
//     console.log(key);
// }
// for (let key in bigMe){
//     console.log(bigMe[key]);
// }

// if('height' in bigMe){
//     console.log('The man has a height');
// } else {
//     console.log('The man is unfathomably tall');
// }

// let newKey = 'age';

// if(newKey in bigMe){
//     console.log(`Jordan has an ${newKey}`);
// } else{
//     console.log(`Jordan is ${newKey}less`);
// }

// console.log(bigMe.nested.where);

// let nestedObjects = {
//     countries: {
//         unitedStates: {
//             newYork: 'new york',
//             california: 'californi'
//         },
//         russia: {
//             moscow: 'mooscow',
//             svet: 'svetakrlekasneleds'
//         }
//     }
// }

// console.log(nestedObjects.countries.russia.svet);

// for(key in nestedObjects){
//     for (subKey in nestedObjects[key]){
//         for(subbestKey in nestedObjects[key][subKey]){
//             console.log(nestedObjects[key][subKey][subbestKey]);
//         }
//     }
// }

// --------------------Arrays--------------------
// let myArray = ['Geralt', 'Yennefer', 'Ciri', 'Triss'];
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[2]);

// for(let i = 0; i < myArray.length;i++){
//     console.log(myArray[i]);
// }

// //Arrays use of, not in
// for (let element of myArray){
//     console.log(element);
// }

//Absolute fucking bonkers array of functions
// const myFunction = (number) => {
//     const functionArray = [
//         (num) => (num += 1),
//         // add function here...
//         (num) => (num *= 2),
//         (num) => (num *= 534),
//         (num) => (num /= 3),
//         (num) => (Math.round(num))
//     ];

//     for (const func of functionArray) {
//         number = func(number);
//     }
//     return number;
// }

// let cities = ['Tokyo', 'Rome'];
// cities.push('Detroit'); //At the end
// cities.pop('Detroit'); //GONE
// cities.unshift('Detroit'); //At the beginning
// cities.shift('Detroit'); //GONE
// cities.splice(1, 0, 'Detroit'); //In the middle
// cities.splice(1, 1); //GONE

// cities.push('Gibbletown', 'Shoobyville');
// console.log(cities.slice(2,4)); //Gives me gibbletown and shoobyville only
// let moreCities = ['Rockford', 'THE KINGDOM OF ATLANTIS'];
// let allCities = cities.concat(moreCities); //Now we got em all in one
// let elements = ['Fire', 'Water', 'Other Water'];
// console.log(elements.join('-')); //Join em all by a -

// let apartments = [
//     ['001', '002', '003'],
//     ['101', '102','103'],
//     ['201', '202', '203']
// ];

// for(let floor = 0; floor < apartments.length; floor++){
//     for(let room = 0; room < apartments[floor].length; room++){
//         console.log(apartments[floor][room]);
//     }
// }
