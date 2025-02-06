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
