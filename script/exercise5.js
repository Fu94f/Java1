
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

console.log(isValidPassword("gattollini","gatto"));
console.log(isValidPassword("gatto llin","gatto"));
console.log(isValidPassword("sadhjashdjasas","Josh1234"));
console.log(isValidPassword("abracadra","Jane24"));






/*
username = prompt("insert username");
password = prompt("insert password");



if (password.length < 8) {
        console.log("password not valid"); 
    } else if (password.includes(" ")){
        console.log("password not valid"); 
    } else if (password.includes("${username}")){
        console.log("password not valid"); 
    } else {
      console.log("password valid"); 
    }

*/
