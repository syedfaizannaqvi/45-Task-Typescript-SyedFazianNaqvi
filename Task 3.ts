// Task 3 Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase and
// titlecase.

let my_name: string = "sYed Faizan NaQvI"
//lowercase
cosole.log(my_name.toLowerCase());
//uppercase
console.log(my_name.toUpperCase());

//titlecase
let firstletter: string = my_name.charAt(0).toLowerCase();
let restletter: string = my_name.slice(1).toUpperCase();
let titlecase = firstletter + restletter;
console.log(titlecase);
