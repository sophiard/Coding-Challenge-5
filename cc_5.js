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