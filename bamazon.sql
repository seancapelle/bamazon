-- Create the database--
CREATE DATABASE BamazonDB;

-- Create the products table--
CREATE TABLE `Products` (
  `ItemID` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(45) NOT NULL,
  `DepartmentName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(10,2) NOT NULL,
  `StockQuantity` INT NULL,
  PRIMARY KEY (`ItemID`));


-- Add product--
INSERT INTO `Products`
(`ProductName`,`DepartmentName`,`Price`,`StockQuantity`)
VALUES
('Omega Virus', 'Games', 19.99, 64),
('The Force Awakens', 'Movies', 19.99, 64),
('Weebles', 'Toys', 5.99, 64),
('Cool shirts', 'Clothing', 5.99, 64),
('Blender', 'Housewares', 49.99, 64),
('Cards Against Humanity', 'Games', 25.99, 64),
('Star Wars action figures', 'Toys', 5.99, 64),
('Shades', 'Clothing', 5.99, 64),
('iPad', 'Electronics', 199.99, 64);

