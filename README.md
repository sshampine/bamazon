# Bamazon

Week 12 Assignment: Bamazon!

The challeng was to create an Amazon like store front using Node.js. The Bamazon store is CLI driven. The Node.js app uses MySQL to hold product inventory. Two versions of Bamazon are available:

* BamazonCustomer
  * Prints product inventory of the store
  * Allows a "customer" to purchse various items from inventory
    * If sufficient inventory is avaiable, the purchase is allowed
    * If the purchase goes throught, inventory is updated
 
 * BamazonManager
   * Allows a "manager" to view inventory, added stock, replenish stock, and create new items for purchase
 
 ## How to Install
 
 1. Clone the bamazon repo to your computer.
 1. From Terminal or Command Line type `nmp install` to install the required NPM files.
 1. Type `npm start` to bring up the initial menu.
 1. Select either `customer` or `manager` to run either version of the store.
 
 ## Technologies Used
 
 * Node.js
 * MySQL
 * Node Package Manager
   * [mysql](https://www.npmjs.com/package/mysql "npmjs mysql")
   * [inquirer](https://www.npmjs.com/package/inquirer "npmjs inquirer")
 
 ## Authors
 
 **Scott Shampine**
