"use strict";
const person_name = "Faizan";
//UpperCase
console.log(person_name.toUpperCase());
//LowerCase
console.log(person_name.toLowerCase());
//TitleCase
let firstLetter = person_name.charAt(0).toUpperCase();
let restLetter = person_name.slice(1).toLowerCase();
let titlecase = firstLetter + restLetter;
console.log(titlecase);
