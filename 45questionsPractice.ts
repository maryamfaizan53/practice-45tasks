//..........................question 1...........................................
///1... install typescript 
///     node js
/////   tsc --init

//........................question 2.........................................
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person : string = "Eric";
console.log`hello! ${person}, would you like to learn some Python today?`

//.............................question 3...............................................................

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person1 : string = "Eric";
console.log(person1.toUpperCase());
console.log(person1.toLowerCase());
for (let i = 0; i >5 ;i++)
   console.log(person1[i]);
let per = person1.replace(/\b\w/g,c=> c.toUpperCase());
console.log(per);

///.............................question 4.......................................................

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famous : string = "Albert Einstein";
console.log(`${famous} once said, “A person who never made a mistake never tried anything new"`)

//..............................question 5.....................................................

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a varia//ble called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let person2 : string = "Albert Einstein";
let message : string = "“A person who never made a mistake never tried anything new'";
console.log(person2 + " "+ "once said,"+ " "+ message);

//.........................question 6.......................................

//Strippin//g Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name1 : string = "Eric";
let name2 : string = "\t Eric   \n"
console.log(name1);
console.log(name2);
let stripptedName : string = name2.trim()
console.log(stripptedName);

//.............................question 7.....................................................

//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let a = 2;
let b = 6;
console.log(a+b)
let a1 = 12;
let b1 = 4;
console.log(a1-b1)
let a2 = 2;
let b2 = 4;
console.log(a2*b2)
let a3 = 32;
let b3 = 4;
console.log(a3/b3)

///.......................question8...........................................

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNum : number = 3;
console.log(`${favNum} is my favourite number`)

//............................question 9....................................

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

////Here is the way to comment press forward slash 2 times....

//.........................question 10................................................................

//names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friends: string[] =["Inaya", "Safa","Huda"]
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
//........................question 11....................................................
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friends1: string[] =["Inaya", "Safa","Huda"]
for (let i = 0; i < friends.length; i++) {
     console.log(`${friends1[i]}! Welcome dear.`) ;

}
//.................................question 12........................................
//our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favtrans : string[] = ["BMW","v8","fortuner"];
favtrans.forEach(favtrans=>
    
     { console.log(`I would like to own a ${favtrans}.`)});

  ///.........................question 13..............................................   

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests : string[] = ["Inaya","Hira","Maya"];
guests.forEach(guests=>{
    console.log(`Hi ${guests}! You are invited today for a dinner.`)

}) 

//..........................question 14.....................................................

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guest : string[] = ["Inaya","Safa","Huda"] 
let notcomming : string[] = ["Safa"];
console.log(`Sorry friends ${notcomming} is not able to come today.`);
let newguest : string = "Kinza";
guest.forEach(function (guest){
    console.log(`Hi! ${guest}! You are inviting for a dinner.`)
});

//..........................question 15........................................
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("I found a bigger table for dinner.");
let extendingfriends : string[] = ["Ali","Hassan","Zain"];
guests.push(...extendingfriends);
guests.forEach(guests=>{
console.log(`"Dear ${guests}Now we have a big dinner table."`)})


//• Add one new guest to the beginning of your array.
guests.unshift("farah");

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guests.splice(3,0,"Hammad");
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are invited for dinner.`);
    
});
//.................question 16.......................................................
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I am inviting only two people for dinner.");

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
guests.pop();
guests.pop();
guests.pop();
guests.pop()
guests.pop()
guests.pop()

guests.forEach(guests=>{
    console.log(`Dear ${guests}, you are still invited for dinner.`);

});    
//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop()
guests.pop()
console.log(guests);

//..................question 17.............................................................


//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places : string[] = ["Turkey","Switzerland","London","New York","Paris"];
console.log(places);


//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.
places.sort();

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(places.reverse());

//• Show that your array is still in its original order by printing it again.
console.log(places.reverse());       

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places); 
/////////................question 18.......................................

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("I am inviting "+guests.length+" people for dinner."); 

//......................question 19............................................ 

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let language: string[] = ["Urdu","English","Pashto"];
//hey think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//.....................question 20.........................................

///Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let err:number[]=[1,2,3,4];
//console.log(err[5]);
console.log(err[4]);
//.....................question 21..........................................................

//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';
let car ="bmw";
console.log(car == "bmw"? true:false);  

//console.log("Is car == 'subaru'? I predict True.")
console.log("I predict True.")

//console.log(car == 'subaru')
console.log(car === "bmw")

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
///.................................question 22.................................
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let makeup = "lipstick";
console.log(makeup == "lipstick"? true:false);
console.log("I predict true")
console.log(makeup =="foundation")
console.log("you predict False")
//.....................question 23    ...................................................
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings.

let string1: string = "Hello";
let string2: string = "hello";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// Tests using the lower case function
console.log(string1.toLowerCase() === string2.toLowerCase()); // true
console.log(string1.toLowerCase() !== string2.toLowerCase()); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Tests using "and" and "or" operators
console.log(num1 > 5 && num2 < 25); // true
console.log(num1 > 15 || num2 < 25); // true

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));//false


//..................................................question 24.......................................

//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let aliens_colour : string = "green";
let points : number = 5;
//checking green colour
if ( aliens_colour == "green"){
    console.log(`"The player just earned ${points} points."`)
}
//...............................................question 25...............................................

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
////26//Alien Colors #2: Choose a color for an alien as //you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.


let greenpoints : number = 5;
let anotherpoints : number = 10;
let color1 : string = "green";
let colorshoot : string = "green";

if (color1 === colorshoot){
    console.log(`Congratulations! The player just earned ${greenpoints} points.`);
}
else{
    console.log(`"Congratulations you have earned ${anotherpoints}."`);
}
//..............................................question 26...............................................

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player ear|ned 5 points.
let aliens_colour0:"green"|"yellow"|"red"
 aliens_colour0 = "green";
//let aliens_colour0 = "yellow";
//let aliens_colour0 = "red";
if(aliens_colour0 === "green"){
    console.log(`"Congratulations You have earned ${greenpoints} points"`);

}

//• If the alien is yellow, print a message that the player earned 10 points.
else if (aliens_colour0 === "yellow"){
    console.log(`"Congratulation you have earned ${anotherpoints} poiunts"`);
}

//• If the alien is red, print a message that the player earned 15 points.
else if (aliens_colour0 === "red"){
    console.log("Congratulations You have earned 15 points")
}

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
else{
    console.log("Try Again")
}

//...........................question 27...........................................................

//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
let age : number = 40;
if (age <= 2){
    console.log("You are a baby")
}

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if ( age === 2 && age >= 4){
    console.log("You are a toddler");
    
}

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if( age == 4 && age <= 13){
    console.log("You are a kid");
    
}

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(age===13 && age <=20){
    console.log("You are a teenager")
}

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age === 20 && age <= 65){
    console.log("You are an adult")
}

//• If the person is age 65 or older, print a message that the person is an elder.
else if(age === 65 && age >= 65){
    console.log("You are an elder person")
}
else{
    console.log("You are a senoir citizen")
};
//......................................question 28...............................................
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.


//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favfruit : string[]= ["Banana","Orange","Mango","Pear","Grapes"];

if (favfruit.includes("Banana")){
    console.log("I realy like Bananas")
}
if (favfruit.includes("Orange")){
    console.log("I realy like Orange")
}
if (favfruit.includes("Mango")){
    console.log("I realy like Mango")
}
if (favfruit.includes("Pear")){
    console.log("I realy like Pear")
}
if (favfruit.includes("Grapes")){
    console.log("I realy like Grapes")
}
///..........................question 29...........................................................

//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames : string[]= ["Admin","Ali","Inaya","Safa","Maryam","Lily"]
for (let i = 0; i > usernames.length; i ++)
{
    if (usernames[i] === "Admin"){
        console.log("Hello Admin, would you like to see a status report?")}
        else{
            console.log(`${usernames[i]} You are logging in again.`)
        }
    }
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//.................................question 30.........................................................

//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
let checkusers : string[] = []
if (checkusers.length === 0){
    console.log("We need to find some users!")
}

//• Remove all of the usernames from your array, and make sure the correct message is printed.
//................................question 31.................................
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
else {
    for (let user of checkusers){
        if ( user === "Admin"){
            console.log("Hello admin, would you like to see a status report?")
    
        }
        else{
            console.log(`${user} Thank you for logging in again.`)
        }
    }
}
//....................................question 32..................................
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users : string[]= ["A","B","C","D","E"];
let new_users:string[]=["C","D","F","G","H"]
for (let user of new_users)
{
 let present_user =   current_users.some(user=>user.toUpperCase() ===user.toLowerCase())
    if(present_user){
        console.log(`"Sorry the user name ${new_users} is already taken. Please enter a new user name.`)
    }
    else{
        console.log(`"Congratulations! The user name ${new_users} is available."`)
    }
}
//...........................question 33..........................................................................

//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers : number[] =[1,2,3,4,5,6,7,8,9] 
for(let number of numbers){
    let ending : string
    if(number == 1){
        ending = "st"
    }
    else if ( number === 2){
        ending = "nd"
    }
    else if(number === 3){
        ending = "rd"
    }
    else{
        ending = "th"
    }
    console.log(`${number}${ending}`)
}
//.................................question 34.....................................................................

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I //really love pizza!
let pizzas : string[] = ["Fajita","Bbq","Tikka"];
for ( let pizza of pizzas){
    console.log(pizza);
}
for ( let i = 0; i > pizzas.length; i++){
    console.log(`I like ${pizzas[i]} flavoured pizza.`)
}
console.log("I realy love pizza.");
//..............................question 35........................................

//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals : string[] = ["Dog","Cat","Fish"];
for (let animal of animals){
    console.log(`"${animal} Would make a great pet"`)
}
console.log(" Any of these animals would make a great pet!")

//..........................question 36......................................................
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:number, message:string){
console.log(`The size of shirt is ${size} and the message on it is ${message}.`)
}
make_shirt(38,"Being Human");
//............................question 37.........................................................

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size:number = 38,message: string = "I love TypeScript"){
    console.log(`The size of shirt is ${size} and the message on it is ${message}.`)
    }
    make_shirts()
    make_shirts(36,"I love Pakistan")// medium
    make_shirts(32,"I love Javascript")// small

//....................................question 38...............................................
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.
function describe_city(name: string = "Karachi",country:string ="Pakistan"){
    console.log(`${name} is in ${country}.`)
}
describe_city()
describe_city("Lahore")
describe_city("Islamabad")
describe_city("Jiddah","Saudia Arabia")
//.........................question 39.........................................................

//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Album {
    artist:string,
    title:string,
    tracks?: number
}

function make_album(artist: string, title:string, tracks? : number){
    const album: Album = {artist,title}
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album
    };  
    //create 3 albums
    const album1 = make_album("Asim azher", "yariyaan", 10);
    const album2 = make_album("Ali Zafar", "Sajanya");
    const album3 = make_album("Badshah", "Soniye", 15);

    console.log(album1);
    console.log(album2);
    console.log(album3);

//...................................question 40....................................

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians: string[] = ["Harry","Welma","john"]
function show_magicians(magicians: string[]){
    for(let magician of magicians){
        console.log(magician)
    }
}
//............................question 41.....................................................

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians:string[]){
    for(let i= 0; i < magicians.length; i++){
        magicians[i] = "the Great " + magicians[i]
    }
    }
console.log(make_great(magicians))
console.log(show_magicians(magicians))
//.......................question 42.......................................................
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let great_magicians: string[] = []
for ( let magician of magicians){
    great_magicians.push("the Great " + magician)


let magicians_copy: string[] = ["Harry","Welma","john"]
 let great_magicians_copy = make_great([...magicians_copy])
//showing old array
console.log("Old array:", magicians_copy)
//showing new array
console.log("New array:", great_magicians_copy)



//...................................question 43........................................


//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]){
    console.log("The sandwich will be made up of the following items:")
    for(let item of items){
        console.log("- " + item)
    }
}
make_sandwich("bread", "ham", "cheese")
make_sandwich("lettuce", "tomato", "mayo")
make_sandwich("butter", "jam", "bread", "peanut butter")
//........................question 45..........................................................

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
interface Car {
    manufacturer: string,
    model: string,
    [key: string]: any
}
function store_car_info(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
const myCar = store_car_info("Toyota", "Camry", "color", "Silver", "features", ["Navigation", "Sunroof"]);
console.log(myCar);





}