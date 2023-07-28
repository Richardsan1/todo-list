CREATE TABLE task(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
    description TEXT,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    done BOOLEAN NOT NULL DEFAULT FALSE
);