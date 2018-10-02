CREATE TABLE restaurants (
	id INT, 
	name VARCHAR (80) NOT NULL, 
	priceRange VARCHAR(5) NOT NULL, 
	healthScore INT NOT NULL, 
	takesReservation BOOLEAN NOT NULL,
	Monday VARCHAR (80) NULL, 
	Tuesday VARCHAR (80) NULL,
	Wednesday VARCHAR (80) NULL,
	Thursday VARCHAR (80) NULL, 
	Friday VARCHAR (80) NULL, 
	Saturday VARCHAR (80) NULL, 
	Sunday VARCHAR (80) NULL, 

	PRIMARY KEY (id)
);
