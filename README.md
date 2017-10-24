# Bamazon

Week 12 Assignment: Bamazon!

The challeng was to create an Amazon like store front using Node.js. The Bamazon store is CLI driven. The Node.js app uses MySQL to hold product inventory. Two versions of Bamazon are available:

* BamazonCustomer
  * Allows a "customer" to purchse various items from inventory
 
 * BamazonManager
   * Allows a "manager" to view inventory, added stock, replenish stock, and create new items for purchase
 
 ## How to Install
 
 1. Verify Node.js is installed. 
 1. Verify MySql is installed.
 1. Clone the bamazon repo to your computer.
 1. Run the bamazon.sql file in a MySQL workbench tool to initial the bamazon database.
 1. Import the inital database data using seedFile.cvs.
 1. From Terminal or Command Line type `nmp install` to install the required NPM files.
 1. Type either `node bamazonCustomer.js` or `node bamazonManager.js` to run either version of the store.
 
 ## Technologies Used
 
 * Node.js
 * MySQL
 * Node Package Manager
   * [mysql](https://www.npmjs.com/package/mysql "npmjs mysql")
   * [inquirer](https://www.npmjs.com/package/inquirer "npmjs inquirer")
 
 ## Authors
 
 **Scott Shampine**
