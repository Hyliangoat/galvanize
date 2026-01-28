//index.js

// -----Using strings with ${} and ` `-----
//${} will print strings better
//Ex: instead of fname + " " + lname + " is a nerd"
//Do: `${fname} ${lname} is a nerd`

// -----Functions-----
// function greet(name) {
//     console.log(`Greetings, ${name}!`);
// }

// function greetAlot(name1, name2, name3){
//     console.log(`Hello, ${name1}, ${name2}, and ${name3}`);
// }

// function addIt(num1, num2){
//     return num1 + num2;
// }

// // -----Rounding and parsing-----
// let roundMe = 2.598495;
// let parseMe = "24";

// // -----Formula is Math.random() * (max - min) + min-----
// let randomNum = Math.random() * (10 - 1) + 1;

// // -----Can apparently assign shit to a function-----
// let adder = addIt(5, 10);

// -----Strings-----
// let testString = "Jordan";
// let firstChar = testString[0];
// let thirdChar = testString[2];
// let lengthOfString = testString.length;
// let subString = testString.substring(3);
// let indexString = testString.indexOf("dan");
// let numTest = 25;
// let stringNum = numTest.toString();


// -----If statements-----
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


// -----Random logs to test the above code-----
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


// -----For loops, while loops, do while loops, and switches-----
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
