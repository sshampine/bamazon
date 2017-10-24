DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT PRIMARY KEY,
	product_name VARCHAR (100) NULL,
	department_name VARCHAR (50) NULL,
	price DECIMAL(5,2) NULL,
	stock_quantity INTEGER (10) NULL
);

