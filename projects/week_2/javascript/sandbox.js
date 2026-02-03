//index.js

// --------------------Using strings with ${} and ` `--------------------//
//${} will print strings better
//Ex: instead of fname + " " + lname + " is a nerd"
//Do: `${fname} ${lname} is a nerd`

// --------------------Functions--------------------//
// function greet(name) {
//     console.log(`Greetings, ${name}!`);
// }

// function greetAlot(name1, name2, name3){
//     console.log(`Hello, ${name1}, ${name2}, and ${name3}`);
// }

// function addIt(num1, num2){
//     return num1 + num2;
// }

// // --------------------Rounding and parsing--------------------//
// let roundMe = 2.598495;
// let parseMe = "24";

// // --------------------Formula is Math.random() * (max - min) + min--------------------//
// let randomNum = Math.random() * (10 - 1) + 1;

// // --------------------Can apparently assign shit to a function-------------------//
// let adder = addIt(5, 10);

// --------------------Strings--------------------//
// let testString = "Jordan";
// let firstChar = testString[0];
// let thirdChar = testString[2];
// let lengthOfString = testString.length;
// let subString = testString.substring(3);
// let indexString = testString.indexOf("dan");
// let numTest = 25;
// let stringNum = numTest.toString();


// --------------------If statements--------------------//
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


// --------------------Random logs to test the above code---------------------//
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


// --------------------For loops, while loops, do while loops, and switches--------------------//
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

// -----------------------------------Object Literals---------------------------------------//
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

// -------------------------------------Arrays---------------------------------------//
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



/*                                                                                                    /
/--------------------------------------Week 2---------------------------------------------------------/
/--------------------------------------Week 2---------------------------------------------------------/
/--------------------------------------Week 2---------------------------------------------------------/
/--------------------------------------Week 2---------------------------------------------------------/
/--------------------------------------Week 2---------------------------------------------------------/
/                                                                                                    */  


//--------------------Spread operator, with add and delete------------------------//
// let doggo = {
//     name: 'Scoobs',
//     breed: 'Great Dane',
//     color: 'Brindle',
//     tailLength: 'Long'
// }

// let catto = {...doggo};
// //Now cat has all keys from the dog
// catto.name = 'Lily'
// catto.breed = 'Munchkin'
// catto.color = 'White'

// console.log(`The dog is ${doggo.name}, but the cat is ${catto.name}`);

// //Now we add some stuff a fancy way

// let birdCat = {
//     ...catto,
//     wingspan: '45 inches'
// }

// console.log(`The cat has a wingspan of ${birdCat.wingspan}`);

// //Now lets delete some stuff in a new clone, but the fancy way

// const {tailLength, ...nubbyDoggo} = doggo;

// console.log(`This new dog has no tail. Here are his stats, ${nubbyDoggo}`);

//----------------------------Rest Parameters--------------------------------------//

// function printBeasts(...allOfEm){
//     console.log(allOfEm);
// }

// //Above but without the array part
// function printBeastsButSeperately(...allOfEm){
//     for(let beast of allOfEm) console.log(beast);
// }

// printBeasts("Charizard", 'Jigglypuff', 'Jigglytuff', 'Wigglyruff', 'Snortinsomesnuff');
// printBeastsButSeperately('Geodude', 'Geoman', 'Geowoman', 'GeoBROTHER', 'GeoNeo');

//------------------------------Destructing Parameters-----------------------------//
// let animals = {
//     cat: "lils",
//     dog: 'other lils',
//     bird: 'jk I hate birds'
// }

// const callEm = ({cat, dog, bird}) => (
//     `Hello ${cat}, ${dog}, and ${bird}`
// );

// console.log(callEm(animals));

// let otherAnimals = {
//     cat: 'Tugg',
//     dog: 'Max',
//     bird: 'demonspawn'
// }

// console.log(callEm(otherAnimals))


// let object = {
//     name: "bob",
//     address: 'billytown',
//     phone: 555555555,
//     email: 'emailemailemail'
// }

// const stringifyContact = (parameter) => {
// 	let {name, address, phone, email} = parameter;
// 	return `${name}, ${address}, ${phone}, ${email}`;
// }

// console.log(stringifyContact(object))


//--------------------------------Default Parameters---------------------------------//

// function greetings(user = 'handsome') {
//     return `Greetings, ${user}`
// }

// console.log(greetings())
// console.log(greetings('Bibbles'))


//=================================Higher Order Functions===============================//

//-----------------------------------For Each---------------------------------------------//
//Basically a for of loop

// let arrayz = [1,2,3,4,5,6,7,8,9];
// arrayz.forEach((element) => {
//     console.log(element);
// });


//-------------------------------------Map------------------------------------------------//
//Pushes all elements into a new array

// const numbers = [1, 6, 2, 1, 6];

// const squareEm = numbers.map((element) => {
//     return element * element;
// })

// console.log(squareEm);


//------------------------------------Filter----------------------------------------------//
//Pushes all elements to a new array, but with a condition

// let homies = ['j sizzle', 'nasty craig', 'little man jimmy', 'jonny thuggin muggins', 'joe'];

// let realOnes = homies.filter(real => real.charAt(0) == 'j');

// console.log(realOnes);

// let capsBusted = [2, 15, 6, 29, 38];

// const shooters = capsBusted.filter(bodies => {
//     return bodies > 10;
// })

// console.log(shooters)

//------------------------------------Find---------------------------------------------//
//Same as filter, but only the first one found

// let homies = ['razzy ray', 'jazzy j', 'juicy j', 'jeffrey with a j']

// let jName = homies.find(name => name.charAt(0) == 'j');

// console.log(jName)

//----------------------------------Reduce--------------------------------------------//
//Reduces an entire array to a single value based on some logic

// const arr = [10, 12, 14, 16, 18, 20];

// let count = 0;

// const reduced = arr.reduce((total, num) => {
//     count++;
//     return total - num;
// })

// console.log(count)
// console.log(reduced)

//------------------------------------Chaining Them-----------------------------------//
//num => typeof numb === 'number num => num * 2'


//-----------------------------------------Document Object Management-----------------//


/* Sample HTML code used for below

<div id="container">
    <div id="myHello" class="myDivs">Hello</div>  
    <div id="myGoodbye" class="myDivs">Goodbye</div>
    <input id="myInput" />
</div>

*/

//------Selecting elements from HTML to use in JS---------//
// let goodbyeElement = document.querySelector("#myGoodbye")
// let helloElement = document.querySelector("#myHello")

// goodbyeElement.style.backgroundColor = "blue";
// helloElement.style.backgroundColor = "yellow";
// goodbyeElement.style.marginTop = "20px";

//------------Changing elements in HTML----------------//
// let inputElement = document.querySelector("#myInput")
// inputElement.placeholder = "Type here..."

//----------Creating new elements in the HTML----------//
// let newH1 = document.createElement('h1');
// let content = document.createTextNode("What's good");
// let container = document.querySelector("#container");

//--Put text in H1, and H1 in container--//
// newH1.appendChild(content);
// container.appendChild(newH1);

//--Now we move it--// 
// container.insertBefore(newH1, container.childNodes[0]);

//-------------Doing all that with inner HTML --------------//
// container.innerHTML = '<h1>Greetings Page</h1> <div id="myHello" class="myDivs">Hello</div> <div class="myDivs">Good Day!</div> <div id="myGoodbye" class="myDivs">Goodbye</div> <input id="myInput" />';

//--Putting that same thing in in box/literal form--//
// container.innerHTML = `
//   <h1>Greetings Page</h1>
//   <div id="myHello" class="myDivs">Hello</div>  
//   <div class="myDivs">Good Day!</div>
//   <div id="myGoodbye" class="myDivs">Goodbye</div>
//   <input id="myInput" />
//   `;

//--Me trying it--//
// container.innerHTML = `
// <h3>"Aloha"</h3>
// <button>Click me</button>
// `


//--------------------Events--------------------//
//let btn = document.querySelector("#button1");

//btn.addEventListener("click", () => alert('Don\'t touch me, peasant'));

//Or
// const myClickFunction = () => {
//   alert('HANDS OFF, WEIRDO');
// }

// btn.addEventListener("click", myClickFunction);

//----Event objects-----//

//Fun lil typer into the console thing
// let nameField = document.querySelector('#name');

// nameField.addEventListener(
//     "input", 
//     (eventObject) => console.log(eventObject.target.value)
// );

//Having the alert show what the user typed into the input box, use preventDefault() to stop screen reloading after a submission
// let nameField = document.querySelector('#name');

// let userInput = "";

// nameField.addEventListener("input", (eventObject) => {
//     userInput = eventObject.target.value
// }); 

// let btn = document.querySelector('#button1');

// btn.addEventListener("click", () => alert(userInput));

//--Removing something after it was pushed once--
// const someAlert = () => {
//   alert("I was clicked")
// }

// document.querySelector('#button1').addEventListener('click', someAlert)

// document.querySelector('#button1').addEventListener('click', () => {
//   document.querySelector('#button1').removeEventListener('click', someAlert);
// });

//---------Recursion---------//
    // let countUp = (count) => {
        
        
    // if(count < 1){
    //     return [0]
    // } else{
    //     const array = countUp(count-1) //enters array, keeps going until it hits 0, returns zero, then pushes it, then pushes the [1], etc
        
    //     array.push(count)
        
    //     return array
    // }
    // };