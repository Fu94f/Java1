// EXERCISE 4 

let price //declare variable price

price = prompt("Insert price $"); // assign a value (will be assigned by the user)

price = "$"+ price; // include the $ sign

console.log(price); // check if it works 

let priceSliced = price.slice(1); //  remove the $  or  price = price.slice(1); new variable to store the value

console.log(price.slice(1)); 
console.log( typeof priceSliced);// check 

let priceNumber = parseFloat(priceSliced); // convert string in number 

console.log(priceNumber); // check if it's a number 
console.log(typeof priceNumber);

let discount = priceNumber * 0.10 ; // 10%

console.log(discount); 
console.log(typeof discount);// check

let newPrice = priceNumber - discount; // reduce price 

console.log(newPrice);
console.log(typeof newPrice); // check result



alert( `Your new price is $${newPrice}`);

// console.log( `Your new price is $${newPrice}`);



/*
// EXERCISE 4 SHORTER 

let price = prompt("Insert price");

price = "$"+ price; //include the $

console.log(price); 

console.log(parseFloat(price.slice(1))); 

price = parseFloat(price.slice(1));

let discount = price * 0.10 ;

let newPrice = price - discount;

//console.log(typeof newPrice);

console.log( `Your new price is $${newPrice}`);

//or

//alert( `Your new price is $${newPrice}`);

*/

/*

//EXERCISE 4  if the user insert $


let price = prompt("Insert price");

console.log(parseFloat(price.slice(1))); 

price = parseFloat(price.slice(1));

let discount = price * 0.10 ;

let newPrice = price - discount;

//console.log(typeof newPrice);


console.log( `Your new price is $${newPrice}`);

//or 

//alert( `Your new price is $${newPrice}`);

*/



