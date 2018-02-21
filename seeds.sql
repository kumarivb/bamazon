/* Seeds for SQL table. We haven't discussed this type of file yet */
USE bamazon;

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Play-Doh", "Toys", 7.99, 4), 
	("A Wrinkle in Time", "Books", 4.86, 12), 
    ("Digital Kitchen Scale", "Kitchen", 11.69, 70), 
    ("Dunkirk", "Entertainment", 19.61, 26), 
    ("Smart LED TV", "Electronics", 1198.00, 5), 
    ("Sectional Sofa Set", "Furniture", 629.99, 1), 
    ("Carry On Bag", "Luggage", 79.99, 53), 
    ("Silver Name Necklace", "Jewelry", 34.00, 19), 
    ("M4 Driver", "Outdoor", 429.99, 47), 
    ("Bluetooth GPS", "Automotive", 109.69, 15);

SELECT * FROM bamazon.products;