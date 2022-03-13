// Create a new project and do npm init
// Create four files called
// add.js ( write function to add 2 numbers and return the value )

// subtract.js ( write function to subtract 2 numbers and return the value )

// multiply.js ( write function to multiply 2 numbers and return the value )

// divide.js ( write function to divide 2 numbers and return the value )

// and then write main.js file where in you will call these functions and do add, subtract, multiply and divide and console.log the answers

  
const ad =  require("./add");
const mult = require("./multiply");
const sub  = require("./substract");
const div  = require("./divide");

 var a = ad.add(10,2);
 var s = sub.substract(10,2);
 var m =mult.multiply(10,2);
 var d = div.divide(10,2);
 console.log(a,s,m,d);