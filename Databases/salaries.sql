USE `HRMIS`;

CREATE TABLE  IF NOT EXISTS `salaries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employeeId` INT NOT NULL,
  `monthYear` DATE NOT NULL,
  `basic` FLOAT NOT NULL,
  `hra` FLOAT NOT NULL,
  `lta` FLOAT NOT NULL,
  `variable` FLOAT NOT NULL,
  `bonus` FLOAT NOT NULL,
  `TDS` FLOAT NOT NULL,
  `total` FLOAT NOT NULL,
  `workingDaysInMonth` FLOAT NOT NULL,
  `dateOfEntry` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateOfModify` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `employeeId_UNIQUE` (`employeeId` ASC));

ALTER TABLE `salaries` 
DROP INDEX `employeeId_UNIQUE` ;

INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('1', '1', '2021-02-01', '18000', '10000', '5000', '10000', '5000', '2000', '46000', '22');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('2', '1', '2021-03-01', '18000', '10000', '5000', '10000', '5000', '2000', '46000', '20');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('3', '2', '2020-04-01', '16000', '9000', '5000', '9000', '5000', '2000', '42000', '21');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('4', '2', '2020-05-01', '16000', '9000', '5000', '9000', '5000', '2000', '42000', '18');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('5', '3', '2020-01-01', '20000', '10000', '5000', '10000', '5000', '3000', '47000', '21');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('6', '3', '2020-02-01', '20000', '10000', '5000', '10000', '5000', '3000', '47000', '22');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`, `workingDaysInMonth`) VALUES ('7', '4', '2020-12-01', '15000', '9000', '5000', '9000', '5000', '2000', '41000', '20');
INSERT INTO `salaries` (`id`, `employeeId`, `monthYear`, `basic`, `hra`, `lta`, `variable`, `bonus`, `TDS`, `total`,`workingDaysInMonth`) VALUES ('8', '4', '2021-01-01', '15000', '9000', '5000', '9000', '5000', '2000','41000', '20');


ALTER TABLE `HRMIS`.`salaries` 
ADD COLUMN `tax` FLOAT NOT NULL AFTER `TDS`;


UPDATE `HRMIS`.`salaries` SET `tax` = '2000' WHERE (`id` = '1');
UPDATE `HRMIS`.`salaries` SET `tax` = '2000' WHERE (`id` = '2');
UPDATE `HRMIS`.`salaries` SET `tax` = '2000' WHERE (`id` = '3');
UPDATE `HRMIS`.`salaries` SET `tax` = '2000' WHERE (`id` = '4');
UPDATE `HRMIS`.`salaries` SET `tax` = '3000' WHERE (`id` = '5');
UPDATE `HRMIS`.`salaries` SET `tax` = '3000' WHERE (`id` = '6');
UPDATE `HRMIS`.`salaries` SET `tax` = '2000' WHERE (`id` = '7');


ALTER TABLE `HRMIS`.`salaries` 
CHANGE COLUMN `dateOfEntry` `dateOfEntry` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `dateOfModify` `dateOfModify` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `HRMIS`.`salaries` 
DROP COLUMN `monthYear`;

ALTER TABLE `HRMIS`.`salaries` 
ADD COLUMN `monthYear` VARCHAR(45) NOT NULL AFTER `employeeId`;

UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Feb 2021' WHERE (`id` = '1');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Mar 2021' WHERE (`id` = '2');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Apr 2020' WHERE (`id` = '3');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'May 2020' WHERE (`id` = '4');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Jan 2020' WHERE (`id` = '5');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Feb 2020' WHERE (`id` = '6');
UPDATE `HRMIS`.`salaries` SET `monthYear` = 'Dec 2020' WHERE (`id` = '7');