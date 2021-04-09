drop database if exists superherodb;
create database superherodb;
use superherodb;

create table superhero(
	heroID integer not null primary key,
	name varchar(15) not null,
	gear varchar(21) not null,
	costume varchar(14) not null,
	yearofBirth integer not null
);
drop user if exists 'felix'@'localhost';
create user if not exists 'felix'@'localhost' identified by 'secret';
grant all privileges on superherodb.* to 'felix'@'localhost'; --superherodb.superhero

insert into superhero values(3,'steeFoot', 'Memoryhancer','blue',1980);
insert into superhero values(7,'Rustmant', 'Jump','blue',1970);

insert into superhero (name, gear, heroID, costume, yearofBirth)
values( 'superMoron','cape',1,'brown',1960);

insert into superhero ( heroID,name, gear, costume, yearofBirth)
values( 2, 'Datamaster', 'SuperArmour', 'red',1890);

insert into superhero values(5,"SuperQL",'Helmet','orange',1905);
insert into superhero values(4,"SuperGenious",'Glove','data-outfit',2017);
insert into superhero values(6,"SuperQL",'Helmet','orange',1905);






-- // mysql -u root -p <superheroCreateStatement.sql>
