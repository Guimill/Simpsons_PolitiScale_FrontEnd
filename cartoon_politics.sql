CREATE DATABASE cartoon_politics

USE cartoon_politics

CREATE TABLE persona (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	lname VARCHAR(100) NOT NULL,
	fname VARCHAR(100),
	political_id INT,
	user_id INT );

INSERT INTO persona (lname, fname)
	VALUES
		(Simpson, Homer)
		(Simpson, Lisa)
		(Burger, "Bob's")
		("L'éponge", Bob)
		(Aran, Samus)
		(Mario)
		(Plante, Pirhana)
		(Calamar, Carlo)
		(Smith, Morty)
		(Smith, Rick)
		(Brown, Cleveland)
		(Noceda, Luz)
		(Pines, Mabel)
		(Waddles)
		(Dresseur, Pokemon)
		(Marie)
		(scoobidoo)
		

CREATE TABLE score (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	scale VARCHAR(50) NOT NULL
	);

INSERT INTO	score (scale)
	VALUES
		(gauche)
		(droite)

CREATE TABLE persona_score (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,	
persona_id INT NOT NULL,
score_id INT NOT NULL,
FOREIGN KEY (persona_id) REFERENCES persona (id) ON DELETE RESTRICT ON UPDATE CASCADE,
FOREIGN KEY (political_id) REFERENCES political (id) ON DELETE RESTRICT ON UPDATE CASCADE,
PRIMARY KEY (persona_id, political_id)
);