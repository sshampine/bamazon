# Bamazon

Week 12 Assignment: Bamazon!

The challeng was to create an Amazon like store front using Node.js. The Bamazon store is CLI driven. The Node.js app uses MySQL to hold product inventory. Two versions of Bamazon are available:

### BamazonCustomer

Allows a "customer" to purchse various items from inventory
  * Prints product inventory of the store
    * If sufficient inventory is avaiable, the purchase is allowed
    * If the purchase goes throught, inventory is updated
 
### BamazonManager

Allows a "manager" to perform various tasks:
     * View products for sale: lists every avaialble item, the ID, name, price, department, and quantity.
     * View low inventory: lists items with an inventory count lower than five.
     * Add inventory: displays a prompt that allows the manager to added more of any item currently in the store.
     * Add new product: allows a manager to add new product to the store.
 
 ## Demo Videos
 
 Using NMP Install - [npm install](https://youtu.be/nxQLvKV84Xg)
 
 Using Customer Module - [npm customer](https://youtu.be/uXmwxNPyUwk)
 
 Using Manager Module - [npm manager](https://youtu.be/hWkHMsOe60U)
 
 
 ## How to Install
 
 1. Clone the bamazon repo to your computer.
 1. From Terminal or Git Bash type `nmp install` to install the required NPM files.
 1. Type `npm start` to bring up the initial menu.
 1. Select either `customer` or `manager` to run either version of the store.
 
 ### Prerequisites
 
 - Node.js - download and install Node.js from https://nodejs.org/en/download/
 - MySQL - download and install MySQL. Create a the initial Bamazon database referencing bamazon.sql file. Import the Bamazon store using the seedFile.csf file.   
 
 ## Technologies Used
 
 * Node.js
 * MySQL
 * Node Package Manager
   * [mysql](https://www.npmjs.com/package/mysql "npmjs mysql")
   * [inquirer](https://www.npmjs.com/package/inquirer "npmjs inquirer")
 
 ## Authors
 
 **Scott Shampine**
