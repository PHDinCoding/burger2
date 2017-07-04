create database burgers_db;

use burgers_db;

create table burgers(
    id int(11) auto_increment primary key,
    burger_name varchar(50),
    devoured boolean,
    date timestamp
);