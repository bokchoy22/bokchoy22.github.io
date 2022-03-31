let myVariable;
myVariable = 'Anthony';

let myVariable2 = 'Peter';

myVariable = 'Celine';

//This is a multi-line comment
//This is a comment
//VARIABLES

let myVariable = 'bob'; //STRINGS

let myNumber = 3; //NUMBERS

let myBoolean = true; //BOOLEANS
let myBoolean = false;

let myArray = [1,'bob', true]; //ARRAYS, holds various datatypes together

let myObjects = document.querySelector('p'); //OBJECTS, but all the above are objects too.
//everything in js are objects but stored as variables

//OPERATORS

6+9; //ADDITION --> +
'Hello' + 'World' //STRING ADDITION --> 'HelloWorld'

//SUBTRACTION --> -
//MULTIPLICATION --> *
//DIVISION --> /

//ASSIGNMENT --> =
//EQUALITY
myNumber ===4;// result in boolean, false

//NOT, DOES NOT EQUAL
!(myNumber===3);
//result in opposite, !(TRUE) --> false
myVariable !==3; // false

//Conditionals
let iceCream = 'chocolate';
if(iceCream==='chocolate'){
  alert('Yay, I love chocolate ice cream!');
}
else{
  alert('Awww, but chcolate is my favorite');
}

//EVENT LISTENERS
document.querySelector('html').addEventListener('click',function(){
  alert('Ouch! Stop poking me!');
});
