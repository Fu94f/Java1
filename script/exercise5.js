
/*

function isValid(password, username) {
    if (password.lenght < 8) {
        return false; 
    } else if (password.includes("")){
        return false;
    } else if (password.includes("${username}")){
        return false;
    } else {
      return true;
    }
   
} 


console.log(isValid("abcrfghjuy","gitto"));*/

/*
function isValidPassword(password, username) {
    if (password.length < 8) {
        return false; 
    } else if (password.includes(" ")){
        return false;
    } else if (password.includes("${username}")){
        return false;
    } else {
      return true;
    }
   
} 

console.log(isValid("gatto llini","gatto"));*/

username = prompt("insert username");
password = prompt("insert password");


if (password.length < 8) {
        console.log("password not valid"); 
    } else if (password.includes(" ")){
        console.log("password not valid"); 
    } else if (password.includes("${username}")){
        console.log("password not valid"); 
    } else {
      console.log("password  valid"); 
    }


