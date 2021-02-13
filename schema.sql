/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
drop database if exists items;
create database items;
use items;

drop table if exists list;
create table list (id int auto_increment not null, itemName varchar(20) not null, itemQuanity int not null, Primary Key(id));

insert into list (itemName, itemQuanity) values ('Milk', 1);
insert into list (itemName, itemQuanity) values ('Bread', 2);
