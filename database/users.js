

drop user 'matt'@'localhost';
select user,host from mysql.user;



create database testdatabase;
show databases;

$ use testdatabase

$ create table employee (employeeId integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15),
    salary decimal(6,2));


show tables

describe employee

select * from employee

insert into employee values(1, 'Matt', 'River', 'ict', 4532);

select * from employe;



create user 'testuser'@'localhost' identified by 'secret';

grant all privileges on testdatabase.* to 'testuser'@'localhost;'
exit;
mysql -u testuser -p;
