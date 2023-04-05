// Write your solution in this file!
// Write your solution in this file!


//error using the equality operator ===
//use the assignment operator  =


/*var customerName = 'bob';
function newCustomerName(){
    console.log('customerName', customerName)
}
newCustomerName();
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  console.log('upperCaseCustomerName');
  console.log('upperCaseCustomerName');
        
    }
    upperCaseCustomerName();
    console.log('customerName', customerName);
   
 let bestCustomer = 'not bob';
 function setBestCustomer(){
    console.log('bestCustomer', bestCustomer);
}
setBestCustomer();
function overwriteBestCustomer(){
    bestCustomer = 'bob'
    console.log('bestCustomer', bestCustomer)
}
let leastFavoriteCustomer = 'bob';
console.log('leastFavoriteCustomer', leastFavoriteCustomer);
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'maybe bob'
    console.log('leastFavoriteCustomer', leastFavoriteCustomer);
}
changeLeastFavoriteCustomer();
// error using Kelly in the initial function*/



// Declare customerName variable in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer to 'not bob'
function setBestCustomer(){
  // Declaring a global variable from inside a function is generally not recommended
  // this is to explore its consequences
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer constant in global scope
const leastFavoriteCustomer = 'kelly';

// Function to try to change leastFavoriteCustomer (should throw an error)
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'john';
}
