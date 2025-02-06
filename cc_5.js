// task 1
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"}; 
    //declared an object customer
  
  console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);
//log properties 


//Task 2 - Order Details.

let order = {
  orderId: 12345,
  totalAmount: 150,
  status: "Processing",
  displayOrder: function() {
      return `Order ID number: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`;
  }
};
// I declared an object Order with propertiees and added a method called display order
//I then returned the properties using this 

console.log("Order details:", order);
console.log("display order:", order.displayOrder());
//loggging order and display order 

// Declaring an inventory object


// Task 3 - Shopping Cart

let cartItems = ["strawberries", "lemons", "muffins"];

cartItems.push("bread");
// added new product using push

cartItems.pop();
//removed last items using the pop method 

cartItems.unshift("Pepsi");
// added item to the begining of the array using unshift

cartItems.shift();
// removed first item from list using shift 

console.log("Final array of CartItems:", cartItems);
//logged the final array


// Task 4 - Price Adjustments 

let prices = [100, 200, 300];
//declared an array

let discountedPrices = prices.map(price => price * 0.9);
//used map method to apply a 10% discount

console.log("orininal prices:", prices)
console.log("Discounted Prices:", discountedPrices);
//logged discounted prices 


//Task 5 - Product Availability

let inventory = [5, 0, 12, 8, 0];
//declared an array inventory

let availableProducts = inventory.filter(quantity => quantity > 0);
//used filter method to remove a product with 0 stock

console.log("Available Products:", availableProducts); 
// logged available products (ones that are NOT 0)



// Task 6 - Revenue Calculation

let sales = [500, 300, 200, 400];
//declared an array called sales

let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
//used the reduce method to calculate the total revenue 

console.log("Total revenue:" , totalRevenue); 
// logged the total revenue 


// Task 7 - Customer Search.
let customers = ["Alice", "Bob", "Charlie", "David"];
//declared array customers

let findCustomer = customers.find(customer => customer === "Charlie");
// used the find method to locate a customer 

console.log("Customer located:", findCustomer);
// logged customer that was found 


// Task 8 - Tax Calculation
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
//I made a fucntion that calcualte tax on amount and rate

let amount = 500; // declared ana maount
let taxRate = 0.10; // declared 10% tax rate 

let taxAmount = calculateTax(amount, taxRate);
// Stored the tax amount

console.log(`Tax Amount: $${taxAmount}`); 
// logged the tax amount 

// Task 9 - Discount Application.
let applyDiscount = function(price, discount = 0.1) { 
  return price * (1 - discount); 
};
//declared a function expression applydiscount 
//calculated the disocunt price 

console.log("Disocunted price $",applyDiscount(500));
// logged the discounted price


// task 10
const calculatePoints = purchaseAmount => purchaseAmount / 10;
//made an arrow functions calculatepoints that takes 1 point for ever $10 dollars spent

let points = calculatePoints(250); //delcared amount spent
console.log(`Earned points: ${points}`);
//logged points earned