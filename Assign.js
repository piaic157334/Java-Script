//task 1
var myFirstName="Naveed";
console.log(myFirstName);

//task 2
var myLowerCaseName=myFirstName.toLowerCase();
var myUperCaseName=myFirstName.toUpperCase();

console.log(myLowerCaseName);
console.log(myUperCaseName);

//task 3

function titleCase(str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) 
   {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   }
   console.log(str.join(' '));
   return str.join(' ');
 }
 titleCase("My name is NAVEED AHSAN");

 //task 4
 console.log ("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");

 //task 5
 famous_person="Albert Einstein";
 quote="“A person who never made a mistake never tried anything new.”";
 quote= famous_person + " " + quote ;

 console.log(quote);

 //task 6

 const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim()
 console.log (sentence);
 
 //task 7 
 var a=3; var b=5; var c=10 ;var d=2 ; var e=32 ; var f=4;

 var result;
 //naveed ahsan 23/10/22 this line of code add two variable and store the value in the result variable
 result=a+b;
 console.log("the result of a + b =" + result);
 // naveed ahsan 23/10/22 this line of code minus two variable and store the value in a result variable.
 result=c-d;
 console.log("the result of c-d =" +result);
 result=e/f;
 console.log("the result of e/f =" +result);

// task8
console.log ("_________________________________________________");
console.log (5+3);
console.log ("_________________________________________________");

console.log ("_________________________________________________");
console.log (6+2);
console.log ("_________________________________________________");
 
//task 9
favourite_number=10
console.log("My favourite number is " + favourite_number);

//task 11
const names=["ali","john","faheem Ahsan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//task 12
console.log ("hello " + names[0]);
console.log ("how old are you " + names[1]);
console.log ("My name is  " + names[02]);

//task 13
const transport=["Car","Motorcycle","Riksaw"];
console.log ("I have my own" + transport[0]);
console.log("The color of my" + transport [1] +" is black");
console.log ("The " + transport[2] + "is a three wheel transport");

//task 14
console.log("i would like to invite "+ names[0]+ " on dinner");
console.log("could you please come "+ names[1]+ "on dinner party");
console.log( names[2]+ "The food in the dinner "+  "is so delicious");

//task 15
console.log(names[1] + "you are not come to the dinner");
names[1]="Aysha";
console.log(names[0] + " Please woud you join us on the dinner party today");
console.log(names[1] + " Please woud you join us on the dinner party today");
console.log(names[2] + " Please woud you join us on the dinner party today");

//task 16
names.push("zulfiqar","Riaz","Bashir");
console.log(names.toString());

names.unshift("zubair");
console.log(names.toString());



//task 19
console.log("i am inviting "+ names.length + " people in the dinner");
//task 17
console.log("i have only space for two guests");
let newguestlist=names.pop();
console.log(newguestlist);
console.log(names.toString());

newguestlist=names.pop();
console.log(newguestlist);
console.log(names.toString());


newguestlist=names.pop();
console.log(newguestlist);
console.log(names.toString());

newguestlist=names.pop();
console.log(newguestlist);
console.log(names.toString());

newguestlist=names.pop();
console.log(newguestlist);
console.log(names.toString());

//remove the last two names from the list
newguestlist=names.pop();
console.log(names.toString());

newguestlist=names.pop();
console.log(names.toString());

//task 18
let places=["USA","KSA","Canada"];
console.log(places.toString());
console.log(places.sort());
console.log(places.reverse());

/*task 20 & 21 Think of something you could store in a array. For example, 
you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items.*/

let countriesdetails=[{ "country":"Pakistan","city":"Lahore","river" :"Ravi","language" :"Urdu" }, 
                      { "cities":"Missiauga","country":"Canada", "river" :"Niagra fall","language" :"French" },
                      { "country":"United Kingdom","city":"Manchester","river" :"Trent","language" :"English" }
                     ];

console.log(countriesdetails);

//task 23

/*let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

 Look closely at your results, and make sure you understand why each line evaluates to True or False.*/

let car ='Honda';
if (car =='subaru') console.log('my prediction is flase') 
else { console.log('my prediction is true');   }

//task 24
let x =5;
 
if (x==5) console.log( x + " true");
if (x!=5) console.log(x+ " fasle");
if (x=="5") console.log (x + " is equal to '5'");
if(x===5) console.log("equal value and equal type");
if(x!==6) console.log("not equal value and equal type");

console.log(typeof(countriesdetails));

//task 25,26,27
var align_color= 'Red';

if (align_color== "Red") console.log("Player is earned 5 points");

if (align_color != "green") console.log("Player is earned 10  points");

if(align_color=="green") {console.log("its not green")} else {console.log("its red")};

/*task 28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

const age=[1,2,4,13,20,65];
if (age[0]<= 2 ) console.log("person is a baby");
if (age[1]>=2 && age[1]<=4) console.log("person is a toddler");
if (age[2]<=4 && age[2] <13) console.log("person is a kid");

if (age[3]<=13 && age[3] <20) console.log("person is a teenager");
if (age[4]<=20 && age[2] <65) console.log("person is a teen adult");
if (age[5]>=65)               console.log("person is a elder");

/* task 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favourite_fruits=["banana","orange","strawberry","apple" ];
  if(favourite_fruits[0]=="apple") console.log(favourite_fruits[0]+" is my favourite fruit");
  if(favourite_fruits[1]=="apple") console.log(favourite_fruits[1]+" is my favourite fruit");
  if(favourite_fruits[2]=="apple") console.log(favourite_fruits[2]+" is my favourite fruit");
  if(favourite_fruits[3]=="apple") console.log( favourite_fruits[3]+ " is my favourite fruit");
 
/*task 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
  Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to 
  see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let users=["admin","eric","tanveer","asghar","masood"];
if (users[0]=="admin") console.log(" Hello admin, would you like to see a status report? ");
if (users[2]=="tanveer") console.log("Hello Eric, thank you for logging in again");

/* Task 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */ 

     
 users.pop();
 users.pop();
 users.pop();
 users.pop();
 users.pop();
 if(users.length ==0)  console.log("We need to find users!"); 

/*• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. If a username 
has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 
 'JOHN' should not be accepted. */

 current_users=["eric","asghar","masood","tanveer"];
 new_users=["asghar","tanveer","naveed"];
  for(var i=0; i<=2;i++)
  {
      for (var j=0;j<=3;j++) 
       {
        if (current_users[j]== new_users[i])
          {
            console.log( new_users[i] + " user name has already been used");
             
            break;

          }

       }
       

       if (current_users[j]!= new_users[i]  )
       {
         console.log( new_users[i] + " new user name is available");
          
         break;
       }
         
  }
/* task 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
and each result should be on a separate line. */

let numbers=[1,2,3,4,5,6,7,8,9];
for (var i=0;i<=8;i++)
{
  if (numbers[i]==1) console.log( numbers[i]+ "st"); 
  else if (numbers[i]==2) console.log( numbers[i]+ "nd");  
  else if (numbers[i]==3) console.log( numbers[i]+ "rd");
  else console.log ( numbers[i]+ "th");

}

/* task 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza 
instead of printing just the name of the pizza. For each pizza you should have one 
line of output containing a simple statement like I like pepperoni pizza. */

pizza=["fork & knives","tikka","fajita"];
for(var i=0;i<=2;i++)
{
  console.log("I like " + pizza[i]);
  
}
/*task 35 Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
 • Add a line at the end of your program stating what these animals have in common. You could print a 
 sentence such as Any of these animals would make a great pet!
*/ 
let animals=["dog","cat","pigeon"];
for (i=0;i<=2;i++)
{
  console.log("A " +  animals[i] +" would make a great pet");

}

/* 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
that should be printed on the shirt. The function should print a sentence summarizing the size 
of the shirt and the message printed on it. Call the function.
 */
function make_shirt(size, msg)
{
  var  getsize=size;
  var  message=msg;
  console.log("the size of the shirt is " + getsize + " and the " + message + " printed on it" );
}

make_shirt(10,"abc logo");

/*task 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a 
shirt of any size with a different message. */

function make_shirtdiff_size(size)
{
  var  getsize=size;
  //var  message=msg;
  if (getsize>30 && getsize<50 )
  {
    console.log("the size of the shirt is large " + getsize  );
    console.log("I love java script");
    

  }
  
 else if (getsize>=20 && getsize<=30)
   {
    console.log("the size of the shirt is medium " + getsize  );
    console.log("I love java scritp");
   }
  else console.log( "These are the different sizes of shirts");    
}

make_shirtdiff_size(40);

/*task 38 Cities: Write a function called describe_city() that accepts the name of a city 
 and its country. The function should print a simple sentence, such as Karachi is in Pakistan. 
 Give the parameter for the country a default value. Call your function for three different cities,
  at least one of which is not in the default country.
 */

function decribe_city(country="Iran",city)
{
     console.log(city + " is in " + country);
     if (country=="Iran") console.log(city+ "is not available in the country.");
}

/*task 39 City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this: "Lahore, Pakistan"*/

function city_country (country,city)
{
   return  '"' +country + "," + city + '"'; 
}

var country_details=city_country("pakistan","lahore");
console.log(country_details);

/* task 40 Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries representing 
different albums. Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
  Make at least one new function call that includes the number of tracks on an album. */

function make_album(artist_name,album_title,track)
{
   track=track || ''; 
    return artist_name + album_title + track
}

var album_details=make_album("Noor Jahan ", "national songs ");
console.log(album_details); 

album_details=make_album("Noor Jahan ", "national songs ",32);
console.log(album_details); 

/* task 41 Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array.*/

let magician=["arif","aslam","asghar","tanveer"];


function mag_names(names)
{
   return names.toString();
}
 var art_names=mag_names(magician);
 console.log(art_names);

/*task 42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function 
called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

function make_great()
{
  var old_mag=mag_names(magician);
  
  var new_mag="The great magicians " + mag_names(magician);
  //console.log(new_mag);
   return new_mag;
}

/* task 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array to show 
that you have one array of the original names and one array with the Great added to each magician’s name. */

function show_magicians()
{
    new_magicians=make_great();
    console.log(new_magicians);
}
show_magicians();
/* task 44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.*/

function sandwich_details(name,ingredients)
{
  console.log("customer order the " + name + " which has the ingredients " + ingredients );
}

sandwich_details("hamburger","olive,cheese,spicy sauces");
sandwich_details("Zinger burger","olive,katchup,Mayamo");
sandwich_details("chicken burger","olive,carrot,eggs");

/*task 45 Cars: Write a function that stores information about a car in a Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call 
the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly. */

 function car_info(manuf,model,engineno,color)
{
  color=color || '';  
   car_detail= manuf + model + engineno +color;
   return car_detail;
}

a=car_info("Toyota"," 2015"," ch-568923","");
b= car_info("Suzuki"," 2017"," ch-8984"," black");
console.log(a);
console.log(b);