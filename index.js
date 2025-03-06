// Write your solution in this file!
// Declare a global variable called customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global (not using var, let, or const)
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changing the existing global variable
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function attempting to change the constant (will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // This will throw an error
}
