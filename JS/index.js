console.log('Yogesh Sawant');

// Variables 

let name= 'yogesh';
console.log(name);

/* Rules for declear variable name

    1) Variable can not be a reserved keyword
    2) Sould be meaningfull variable 
    3) cannot start with a number
    4) can not contain a space or hyphen(-)
    5) are case-sensitive
 
*/

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


//Data Types 
/*
    Primitive / Value Types

    string
    Number
    Boolean
    undefined
    null
*/

let Name = 'Yogesh';  //string literal
let age = 22;         // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;//( undefined is a type also it is value i.e undefined is a value 
                          //  its type also undefned )
let selectedColor = null;

// Reference Type 
/*
  object
  Array
  Function
*/
//Object
 
 //let name1 = 'Yogesh';
 //let age = 30;

 let person = {
  name1 : 'ganesh',
  age1: 30
 }

 console.log(person);

 // Dot Notation 
 person.name1 = 'John';
 
 console.log(person.name1);

 // Bracket Notation
 person['name1'] = 'Fork';
 console.log(person.name1);

 //Array 

 let selectcolor = ['red','blue'];
 console.log(selectcolor);

 selectcolor[2] = 1;
 console.log(selectcolor);
 
 console.log(selectcolor.length);




