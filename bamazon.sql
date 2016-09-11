-- Create the database--
CREATE DATABASE bamazon;

-- Create the products table--
CREATE TABLE `bamazon`.`products` (
  `itemID` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) NOT NULL,
  `departmentName` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stockQuantity` INT NULL,
  PRIMARY KEY (`itemID`));


-- Insert values into the products table--
INSERT INTO `bamazon`.`products`
(`productName`,
`departmentName`,
`price`,
`stockQuantity`)
VALUES
('Dog Collar', 'Pet Supplies', 5.25, 10),
('Dog Leash', 'Pet Supplies', 6.25, 12),
('Coffee Maker', 'Home Goods', 20.25, 10),
('Lamp', 'Home Goods', 10.25, 5),
('iPhone', 'Tech', 199.99, 8),
('Keyboard', 'Tech', 20.50, 4),
('Crayons', 'Art Supplies', 2.99, 15),
('Sketchbook', 'Art Supplies', 5.99, 20),
('Shampoo', 'Bath', 4.50, 10),
('Conditioner', 'Bath', 5.50, 8);

