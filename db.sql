CREATE DATABASE kh;
USE kh;

CREATE TABLE `user` (
	`id`	INT(100)	AUTO_INCREMENT NOT NULL ,
	`name`	VARCHAR(20)	NOT NULL,
	`phone`	VARCHAR(20)	NOT NULL,
	`password`	VARCHAR(100)	NOT NULL,
	`email`	VARCHAR(100)	NOT NULL,
	`address`	VARCHAR(100)	NULL,
	`enable` VARCHAR(2) NULL,
	`role`	VARCHAR(20)	NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE `user`;

INSERT INTO user VALUES (null, '박병길','010-4580-8682','a3228682','pop8682@gmail.com',null,'1','ROLE_USER');
INSERT INTO user VALUES (null, '케이시','010-2231-9969','a3227302','Kassie@gmail.com',null,'1','ROLE_USER');

SELECT * FROM user;

CREATE TABLE `store` (
	`id`	INT	AUTO_INCREMENT NOT NULL,
	`state`	VARCHAR(255)	NULL,			
	`title`	VARCHAR(255)	NULL,			
	`size`	VARCHAR(255)	NULL,			
	`sort`	VARCHAR(255)	NULL,			
	`address_land`	VARCHAR(255)	NULL,	
	`address_road`	VARCHAR(255)	NULL,	
	`post`	INT	NULL,			
	`latitude`	VARCHAR(255)	NULL,				
	`longitude`	VARCHAR(255)	NULL,
	`run` VARCHAR(255)	NULL,
	`minimum_price`	VARCHAR(255)	NULL,
	`payment_option`	VARCHAR(255)	NULL,
	`info`	VARCHAR(255)	NULL,
	`hours`	VARCHAR(255)	NULL,
	 PRIMARY KEY(`id`)
);

DROP TABLE `store`;

INSERT INTO store VALUES (null,'김해','무한삼겹','121','카페',
'김해시 전하동','김해시 가야로','1234','124.1234','123.2314',
'운영중',null,null,null,null);

SELECT * FROM store;

CREATE TABLE `category` (
	`id`	INT	AUTO_INCREMENT NOT NULL,
	`title`	VARCHAR(255)	NULL,
	`name`	VARCHAR(255)	NULL,
	`image`	VARCHAR(255)	NULL,
	`file`	VARCHAR(255)	NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE category;

SELECT * FROM `category`;

CREATE TABLE `review` (
	`id`	INT	NOT NULL,
	`user_id`	INT	NOT NULL,
	`store_id`	INT	NOT NULL,
	`star`	INT	NULL,
	`content`	VARCHAR(1000)	NULL,
	`date_post`	DATETIME	NULL,
	`Field`	VARCHAR(255)	NULL,
	CONSTRAINT FK_store_id FOREIGN KEY (store_id) REFERENCES store(id)
);

drop table review;

CREATE TABLE `menu` (
	`id`	INT AUTO_INCREMENT NOT NULL,
	`store`	INT	NOT NULL,
	`name`	VARCHAR(255)	NULL,
	`price`	INT	NULL,
	`profile`	VARCHAR(255)	NULL,
	PRIMARY KEY(`id`),
	CONSTRAINT FK_menu_store FOREIGN KEY (store) REFERENCES store(id)
);

drop table menu;

INSERT INTO menu VALUES(null, 1, '아메리카노',3000,null);
INSERT INTO menu VALUES(null, 1, '라떼',4000,null);
INSERT INTO menu VALUES(null, 1, '바닐라라떼',4500,null);
INSERT INTO menu VALUES(null, 1, '모카라떼',4500,null);

INSERT INTO menu VALUES(null, 2, '아메리카노',3000,null);
INSERT INTO menu VALUES(null, 2, '라떼',4000,null);
INSERT INTO menu VALUES(null, 2, '바닐라라떼',4500,null);
INSERT INTO menu VALUES(null, 2, '모카라떼',4500,null);

select * from menu;
