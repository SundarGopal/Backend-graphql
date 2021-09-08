CREATE DATABASE  IF NOT EXISTS `HRMIS` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `HRMIS`;

CREATE TABLE `employee` (
 `id` int(11) NOT NULL,
 `name` varchar(45) NOT NULL,
 `email` varchar(45) NOT NULL,
 `address` varchar(45) NOT NULL,
 `dateOfBirth` date NOT NULL,
 `dateOfJoining` date NOT NULL,
 `education` varchar(45) NOT NULL,
 `type` varchar(45) NOT NULL,
 `role` varchar(45) NOT NULL,
 `password` varchar(45) NOT NULL,
 `dateOfEntry` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `dateOfModify` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 UNIQUE KEY `email_UNIQUE` (`email`)
); 


INSERT INTO `employee` (`id`,`name`,`email`,`address`,`dateOfBirth`,`dateOfJoining`,`education`,`type`,`role`,`password`,`dateOfEntry`,`dateOfModify`) VALUES (1,"John Prawl","john.prawl@yara.com","United Kingdom","1993-07-07","2021-01-01","B.Tech","engineer","admin","admin","2021-09-08 12:55:21","2021-09-08 12:55:21");
INSERT INTO `employee` (`id`,`name`,`email`,`address`,`dateOfBirth`,`dateOfJoining`,`education`,`type`,`role`,`password`,`dateOfEntry`,`dateOfModify`) VALUES (2,"Sheila","sheila@yara.com","Norway","1995-05-05","2020-03-03","MS, PhD","contract","normal","normal","2021-09-08 12:55:21","2021-09-08 12:55:21");
INSERT INTO `employee` (`id`,`name`,`email`,`address`,`dateOfBirth`,`dateOfJoining`,`education`,`type`,`role`,`password`,`dateOfEntry`,`dateOfModify`) VALUES (3,"Dwight","dwight@yara.com","San Jose","1989-09-27","2020-01-01","MBA","manager","admiin","admin","2021-09-08 12:55:21","2021-09-08 12:55:21");
INSERT INTO `employee` (`id`,`name`,`email`,`address`,`dateOfBirth`,`dateOfJoining`,`education`,`type`,`role`,`password`,`dateOfEntry`,`dateOfModify`) VALUES (4,"Rene","rene@yara.com","Berlin","1992-07-30","2020-12-12","MS","support","normal","normal","2021-09-08 12:55:21","2021-09-08 12:55:21");

ALTER TABLE `HRMIS`.`employee` 
CHANGE COLUMN `dateOfEntry` `dateOfEntry` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `dateOfModify` `dateOfModify` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `HRMIS`.`employee` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;
